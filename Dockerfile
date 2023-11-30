# Use the official Node.js image
FROM node:14 as builder

# Set the working directory for the frontend
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY my-react/package*.json ./

# Install dependencies
RUN npm install @latest --force

# Copy the frontend source code
COPY my-react /.

# Build the frontend
RUN npm run build

# Use a lightweight Node.js image for the production environment
FROM node:14-alpine

# Set the working directory for the production image
WORKDIR /app/frontend

# Copy the built files from the builder stage
COPY --from=builder /app/frontend/build /app/frontend/build

# Expose the port on which the React app will run
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

# Use the official Python image
FROM python:3.8

# Set the working directory for the backend
WORKDIR /app

# Install system dependencies for pyodbc
RUN apt-get update \
    && apt-get install -y unixodbc-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN pip install --no-cache-dir --upgrade pip

# Copy the requirements.txt file
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend source code
COPY my-react/src/Services/ .

# Expose the port on which the Flask app will run
EXPOSE 5000

# Set environment variables for the Flask app
ENV FLASK_APP=Api.py
ENV FLASK_RUN_HOST=0.0.0.0

# Set environment variables for the SQL Server connection
ENV SQL_SERVER_CONNECTION_STRING='mssql+pyodbc://ut7xwfa4xede5b2:cEYw6IHcSCliHUX&vXdsynEDC@eu-az-sql-serv1.database.windows.net/d9zkgftdim6prd0?trusted_connection=no&driver=ODBC+Driver+17+for+SQL+Server'

# Download and install the SQL Server ODBC driver
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && ACCEPT_EULA=Y apt-get install -y msodbcsql17 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
    
# Start the Flask app
CMD ["python", "Api.py"]
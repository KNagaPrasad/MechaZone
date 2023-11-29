# Use the official Node.js image
FROM node:14 as builder

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy the package.json and package-lock.json files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the frontend source code
COPY frontend/ .

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
WORKDIR /app/backend

# Start the Flask app
CMD ["flask", "run"]
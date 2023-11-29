# Use the official Node.js image
FROM node:14 as builder

# Set the working directory for the frontend
WORKDIR /app/frontend

# Start the React app
CMD ["npm", "start"]

# Use the official Python image
FROM python:3.8

# Set the working directory for the backend
WORKDIR /app/backend

# Start the Flask app
CMD ["flask", "run"]
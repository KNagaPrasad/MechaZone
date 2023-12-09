# MECHAZONE E-Commerce  Platform

MECHAZONE is a revolutionary e-commerce platform designed specifically for the automotive industry. It offers a comprehensive solution for vehicle enthusiasts and owners, simplifying the process of purchasing and installing vehicle parts. This README file provides an overview of the platform's features and how to get started.

## Key Features

### 1. User-Friendly Interface

MECHAZONE features a user-friendly interface that allows customers to effortlessly browse and purchase vehicle parts. Users can easily search for parts compatible with their specific vehicle models, add items to their cart, and complete their purchases with ease.

## 2. Flexible Delivery Options

Customers have the flexibility to choose how they want to receive their purchases. They can opt for convenient home delivery or select a nearby repair shop for professional installation. This flexibility empowers users to make choices that align with their preferences and needs. The platform also facilitates appointment scheduling for the installation of purchased parts, helping users efficiently plan their vehicle maintenance.

## 3. Repair Shop Integration
MECHAZONE offers a seamless integration with local repair shops, providing users with the option to have their purchased parts professionally installed. This feature enhances the overall user experience by ensuring that vehicle owners can maintain and upgrade their vehicles without the hassle of DIY installations.

## 4. Profile Management

MECHAZONE provides users with the ability to manage their profiles, track their orders, and access purchase history. This feature helps customers stay organized and informed about their automotive needs.

# Development Environment Setup

To set up the development environment for the Mechazone web application, follow these instructions:

## Prerequisites

Node.js: Install Node.js on your machine. You can download it from https://nodejs.org/.

Python: Install Python on your machine. You can download it from https://www.python.org/.

MSSQL Database: Set up an online MSSQL database and obtain the connection details.

## Frontend

1.Open a terminal.

2.Navigate to the frontend directory.

3.Install the required dependencies.

    npm install

## Backend

1.Open a new terminal.

2.Navigate to the backend directory.

3.Install Python dependencies.

    pip install -r requirements.txt

## Database Setup

Currently, Mechazone is using an online database that works seamlessly across all systems. In the future, there might be a transition to a purchased online database. Follow these steps to set up the initial database and prepare for a future database transition.

1.Navigate to the mechazone-backend/src/services directory.

2.Open the database.py file.

3.Locate the DB_CONNECTION_STRING in the file and set it with to the new database engine connection string.

4.Load your DB with the relevant data information related to car and bike brands, models, and parts into the database using SQL queries 

## Build and Run Application

Now that the development environment is set up, you can build and run the Mechazone web application:

1.Open two terminals, one for the frontend and one for the backend.

2.In the frontend terminal, start the frontend development server

    npm start

3.In the backend terminal, start the backend server 

    python Api.py

4.Access the Mechazone web application in your web browser at http://localhost:3000.

# Additional Notes

1.Keep both the frontend and backend servers running during development.
2.Ensure that the online MSSQL database is accessible and correctly configured.
3.To use your own MSSQL database, modify the connection string in the database.py file located in the src/services directory.
4.Make sure to execute the necessary SQL queries in your database related to brands and models. This may include creating tables for brands and models, populating them with relevant data.


													

													

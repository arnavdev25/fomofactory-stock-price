# Stock Price Tracker

## Overview

The Stock Price Tracker is a web application that allows users to monitor real-time stock prices for selected stocks. The application fetches real-time data every minute from an external API, stores it in a MongoDB database, and displays the most recent 20 entries for a selected stock in a dynamically updating table.

## Features

- **Real-Time Data Fetching:** Polls real-time stock price data every minute for five stocks (GOOG, AAPL, MSFT, NVDA, AMZN) using the Alpha Vantage API.
- **Data Storage:** Stores the fetched data in a MongoDB database.
- **Dynamic Table:** Displays the most recent 20 price entries in a table that updates in real-time.
- **Symbol Switching:** Allows users to change the tracked stock via buttons.
- **Error Handling:** Logs errors during data fetching and saving operations.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime for the server-side application.
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for JavaScript apps.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.


## Installation

Clone the repo from ''


### Backend

1. Navigate to the `backend` directory:

cd fomofactory-stock-price/backend


2. Install dependencies:

npm install


3. Start the backend server:

node src/app.js



### Frontend

1. Navigate to the `frontend` directory:

cd fomofactory-stock-price/frontend


2. Install dependencies:

npm install


3. Start the frontend server:

npm start

4. Open your browser and navigate to 'http://localhost:3000'.



### Usage

-> The application will display real-time stock prices for the default stock symbol (BTC).
-> To change the tracked stock, choose the corresponding button from modal.
-> The table will update every minute with the latest stock prices fetched from the API.



### Notes

-> Ensure that your MongoDB server is running and accessible.
-> Ensure Alpha Vantage API key in the config file is not expired in case it is expired you will have to create a new one and replace it in config.
License
-> I am disclosing config file to run the peoject in local.

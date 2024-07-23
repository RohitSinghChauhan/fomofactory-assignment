##Real-Time Crypto Price Tracker
This project is a real-time cryptocurrency price tracker built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. The application collects and displays real-time price data for various cryptocurrencies.

Features
Real-Time Data Collection: Polls real-time data every few seconds for specified cryptocurrencies using a free API and stores the data in a MongoDB database.
Dynamic Table: Fetches the most recent 20 real-time data entries for a particular cryptocurrency from the MongoDB database and displays them in a dynamically updating table.
Stock/Crypto Selector: Includes a modal/popup to allow users to change the selected cryptocurrency or stock.
State Management: Utilizes Redux for state management, storing all state in localStorage. Actions and selectors are used instead of useState.
Tech Stack
Backend:

Node.js
Express.js
MongoDB
Mongoose
Axios
Node-Cron
Frontend:

Next.js
React.js
TypeScript
Redux

##Installation

Clone the repository:
git clone https://github.com/your-username/real-time-crypto-price-tracker.git

Set up the backend:
cd backend
npm install
npm start

Set up the frontend:
cd frontend
npm install
npm run dev

##Usage
The application will automatically fetch and store cryptocurrency data in the MongoDB database every few seconds.
The homepage will display a table with the most recent 20 entries for the selected cryptocurrency.
The application is built for the purpose of candidate assessment.



# Project Title

Transaction App

## Features

- All data shown on the table
- Search functionality=> We can search by a description and title.
- Sort by Month
- prices according to month in the form of charts

## Installation

Detailed instructions on how to install, configure, and get the project running.

<h3>Frontend</h3>
npm install frontend <br/>
cd frontend <br/>
npm start
<br/><br/><br/>
<h3>Backend</h3>
cd Backend <br/>
npm install <br/>
npm run server

## Usage

Provide instructions and examples on how to use your project.

# Example

<h1>Home Page</h1> 
<img src="https://github.com/Anmoljagota/Roxiler-system-assignment/blob/main/frontend/src/utils/HomePage.png?raw=true"/><br/>
<img src="https://github.com/Anmoljagota/Roxiler-system-assignment/blob/main/frontend/src/utils/footerhome.png?raw=true"/><br/><br/>
<h1>Chart Page</h1>
<img src="https://github.com/Anmoljagota/Roxiler-system-assignment/blob/main/frontend/src/utils/chart.png?raw=true"/>

## APIs Used

## API Endpoints

GET /items - retrieve all items <br/>
GET /items/q={search by description and title} - to search by description and title <br/>
GET /items?month="By month" - filter according to month <br/>
GET /items/Statistics?month="Type month" - visualize items with the help of chart <br/>
POST /API/items - create a new item <br/>

## Technology Stack

- react.js
- Node.js
- Express.js
- MongoDB
- chakra ui
- tailwind css

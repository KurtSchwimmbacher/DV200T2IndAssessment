# Plantopia - A Plant-themed MERN CRUD Application

## Overview

Plantopia is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to explore and manage a collection of plants. The application provides CRUD (Create, Read, Update, Delete) functionality for plant items, along with additional features such as image uploads, pagination, and search functionality.

## Features

- **CRUD Operations**: Users can create, read, update, and delete plant items.
- **Image Uploads**: Users can upload images for each plant item.
- **Pagination**: Plant items are paginated for easier navigation, especially with long lists.
- **Search Functionality**: Users can search for specific plant items by name or attributes.
- **Responsive Design**: The application is designed to be responsive and accessible across different devices and screen sizes.

## Setup and Installation

1. **Clone the Repository**: 
git clone https://github.com/KurtSchwimmbacher/DV200T2IndAssessment.git

2. **Backend Setup**:
- Navigate to the `backend` directory:
  ```
  cd plantopia/backend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Create a `.env` file and add your MongoDB connection string:
  ```
  MONGODB_URI=your_mongodb_connection_string
  ```
- Start the backend server:
  ```
  npm start
  ```

3. **Frontend Setup**:
- Navigate to the `frontend` directory:
  ```
  cd plantopia/frontend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the React development server:
  ```
  npm start
  ```

4. **Open the Application**:
- Once both the backend and frontend servers are running, open your browser and navigate to `http://localhost:3000` to access Plantopia.

## Technologies Used

- **Backend**:
- Node.js
- Express.js
- MongoDB
- Mongoose
- **Frontend**:
- React
- Axios
- React Router
- **Styling**:
- CSS (with optional frameworks like Bootstrap or Material-UI)

## Usage

1. **Explore Plant Collection**:
- Browse through the list of plant items.
- Click on a plant item to view its details.

2. **Add New Plant**:
- Click on the "Add Plant" button to create a new plant item.
- Fill out the required fields and optionally upload an image.

3. **Update Plant**:
- Click on the "Edit" button on a plant item's detail page to update its information.

4. **Delete Plant**:
- Click on the "Delete" button on a plant item's detail page to remove it from the collection.

5. **Search and Pagination**:
- Use the search bar to find specific plant items by name or attributes.
- Navigate through paginated pages to view more plant items.

## Credits

This project was developed by [Your Name] as an assignment for [Course/Institution Name]. 

## License

This project is licensed under the [MIT License](LICENSE).

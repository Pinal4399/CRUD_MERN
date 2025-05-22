A full-stack CRUD application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to create, read, update, and delete items in a database.

# Features
Create, read, update, and delete data from a MongoDB database

RESTful API built with Node.js and Express

Frontend built with React

Uses Axios for API requests

Backend and frontend run concurrently during development

# Technologies Used
Frontend: React, Axios

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose)

# Folder Structure
/client        → React frontend

/server        → Express backend

README.md      → Project overview

#Screenshots

![image](https://github.com/user-attachments/assets/769317e6-8f90-4697-8405-cda1568b100b)

![image](https://github.com/user-attachments/assets/1df391f3-ef2f-4935-b6d6-796b4208e3b5)

# Installation & Setup Instructions
Prerequisites
1.Make sure you have the following installed:

Node.js

MongoDB

npm or yarn
2.  Clone the repo
   git clone https://github.com/Pinal4399/CRUD_MERN.git
   cd CRUD_MERN
3. Setup Backend
4. Setup Frontend

Now, your React app should be running on http://localhost:3000 and backend API on http://localhost:8000.

# API Endpoints
Method	Endpoint	Description
GET	/	Get all uesr
POST	/create	Add new user
PUT	/update	Update an user
DELETE	/delete/:id	Delete an user

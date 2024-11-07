StudyNotion E-Learning Platform

Table of Contents

	•	Project Overview
	•	Features
	•	Technologies Used
	•	Installation
	•	Usage
	•	Folder Structure
	•	Screenshots
	•	Contributing
	•	License

Project Overview

StudyNotion is a full-featured E-Learning platform designed to provide an interactive and engaging online education experience. This platform allows users to sign up, enroll in courses, and track their learning progress. StudyNotion also includes admin functionality for managing users, courses, and content.

Features

	•	User authentication with secure login and registration.
	•	User profile management and course enrollment.
	•	Dynamic course content with video lectures, quizzes, and assignments.
	•	Admin dashboard for managing courses and users.
	•	Interactive UI with a responsive design.
	•	Backend API to support user, course, and enrollment data.

Technologies Used

	•	Frontend: React, Redux Toolkit, TailwindCSS, Axios, GSAP for animations
	•	Backend: Node.js, Express.js, MongoDB
	•	Authentication: JWT, bcrypt for password hashing
	•	Deployment: Vercel (frontend and backend configuration)
	•	Other Tools: Concurrently, React Router, React Icons, and React Hot Toast for notifications

Installation

To get a local copy up and running, follow these simple steps:

Prerequisites

	•	Node.js and npm installed on your local machine.

Clone the Repository

git clone https://github.com/Deepanshu-mani/studynotion-e-learning-web.git
cd studynotion-e-learning-web

Install Dependencies

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../src
npm install

Environment Variables

Create a .env file in the server directory with the following variables:

MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret

Running the Application

In the project root directory, run:

# Run both frontend and backend concurrently
npm run dev

The application should now be running at http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

Folder Structure
```
studynotion-e-learning-web/
│
├── server/                   # Backend (Node.js/Express)
│   ├── config/               # Database and other configurations
│   ├── controllers/          # API route controllers
│   ├── middleware/           # Authentication and other middleware
│   ├── models/               # Mongoose models
│   ├── routes/               # API route definitions
│   ├── utils/                # Helper functions
│   ├── .env                  # Environment variables
│   └── index.js              # Entry point for the server
│
├── src/                      # Frontend (React)
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable React components
│   ├── pages/                # Page components
│   ├── redux/                # Redux store and slices
│   ├── App.js                # Main app component
│   └── index.js              # Entry point for the frontend
```
Screenshots

	1.	Home Page
 <img width="1710" alt="Screenshot 2024-11-07 at 7 19 10 PM" src="https://github.com/user-attachments/assets/e1046aad-2fdf-4cfc-8f80-d982cd7eda4c">

	2.	About us Page
 <img width="1710" alt="Screenshot 2024-11-07 at 7 19 18 PM" src="https://github.com/user-attachments/assets/75c684c3-ee80-4f46-80c5-3e42e6fceb6a">


	3.	Contact us Page
 <img width="1710" alt="Screenshot 2024-11-07 at 7 19 24 PM" src="https://github.com/user-attachments/assets/2c1d4f74-8f52-48b8-8d43-037eb95deea9">
 
	4.	Sign up Page
<img width="1710" alt="Screenshot 2024-11-07 at 7 19 38 PM" src="https://github.com/user-attachments/assets/7ce88997-7933-4a44-bee9-19407fcf57a4">

	5.	My Profile Page
<img width="1710" alt="Screenshot 2024-11-07 at 7 35 54 PM" src="https://github.com/user-attachments/assets/e963eded-4888-405a-8602-98377a88a8ee">

	6.	DashBoard  Page
 <img width="1710" alt="Screenshot 2024-11-07 at 7 36 06 PM" src="https://github.com/user-attachments/assets/a14b3dc8-e946-4d72-b45b-c066894177ed">

	7.	Add Course Page
 <img width="1710" alt="Screenshot 2024-11-07 at 7 36 59 PM" src="https://github.com/user-attachments/assets/36c78029-819a-463b-a054-51a673c4670c">


	8.	My Courses Page
 <img width="1710" alt="Screenshot 2024-11-07 at 7 36 11 PM" src="https://github.com/user-attachments/assets/65f6acdc-f5b2-4a45-9504-eca03014fb90">


	9.	Seetting Page
  <img width="1710" alt="Screenshot 2024-11-07 at 7 37 08 PM" src="https://github.com/user-attachments/assets/7ab3436c-4786-4d92-828f-c525aab51e66">

    10.	  Logout Page


<img width="1710" alt="Screenshot 2024-11-07 at 7 37 15 PM" src="https://github.com/user-attachments/assets/b041ae53-5b48-4dd3-bf16-28d120cd75f6">

Contributing

Contributions are welcome! Please fork this repository and create a pull request with your feature or bug fix.

	1.	Fork the Project
	2.	Create your Feature Branch (git checkout -b feature/AmazingFeature)
	3.	Commit your Changes (gitcommit -m 'Add some AmazingFeature')
	4.	Push to the Branch (git push origin feature/AmazingFeature)
	5.	Open a Pull Request

License


Distributed under the MIT License. See LICENSE for more information.

Let me know if you’d like any further customization for th
is README!

=====================================================================
 HOSTEL ROOM BOOKING MOBILE APPLICATION
 React Native (Expo) + Node.js/Express + MongoDB Atlas + Supabase
=====================================================================

1. Project Details
-------------------
Project Name: Hostel Room Booking Mobile Application
Type: Individual Project
Student ID: IT23703612
Student Name: Wickramasingha S.S

This project is a mobile application developed for hostel room booking
management. It allows students to view available rooms, book rooms for a
selected date range, and manage their bookings, while admins can manage
rooms and booking approvals.

2. GitHub / Repository
----------------------
Repository: https://github.com/SandeepaTech/Hostel-Room-Booking-Mobile-Application.git

3. Overview
-----------
The application provides a complete hostel booking flow for a university or
hostel management system.

Main features include:
- User registration and login using JWT authentication
- Student account and admin account roles
- Room listing with search and filters
- Room details with pricing and availability information
- Booking creation, update, cancellation, and deletion
- Admin booking approval and rejection workflow
- Room management for admin users
- Room image upload support using Supabase Storage

Primary entities:
- User
- Room
- Booking

4. Tech Stack
-------------
Mobile App:
- React Native
- Expo
- React Navigation
- Axios
- NativeWind / Tailwind CSS

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Express Validator
- CORS and dotenv
- Supabase Storage for image upload

Database:
- MongoDB Atlas

5. Project Structure
--------------------
Hostel-Room-Booking-Mobile-Application/
|-- backend/
|   |-- config/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- uploads/
|   |-- utils/
|   |-- validators/
|   |-- server.js
|   |-- package.json
|   |-- README.md
|   `-- .env
|
|-- frontend/
|   |-- App.js
|   |-- src/
|   |-- assets/
|   |-- package.json
|   |-- app.json
|   `-- babel.config.js
|
|-- README.md
|-- README.txt
`-- .gitignore

6. User Roles
-------------
Student role:
- Register and login
- View room listings and room details
- Create and manage personal bookings
- Cancel their own booking requests

Admin role:
- Add, edit, and delete rooms
- View all bookings
- Approve or reject room bookings
- Manage hostel room availability

7. Features
-----------
- Secure user authentication with JWT
- Password hashing and protected API access
- Room CRUD operations
- Room filtering by search, room type, and availability status
- Booking creation with validation for date range and capacity
- Booking status workflow: Pending, Approved, Rejected, Cancelled
- Frontend navigation between auth, room, and booking screens
- Admin approval flow for bookings
- Image upload for room listings

8. Business Rules
-----------------
- Only authenticated users can create or manage bookings
- Admins can access all bookings and room management functions
- Regular users can only manage their own bookings
- End date must be after start date
- Rooms cannot exceed their defined capacity
- Booking status cannot be modified after it reaches a non-pending state
- Admins can approve or reject pending bookings
- A room with active approved bookings cannot be deleted

9. Environment Setup
-------------------
Create a .env file inside the backend folder with the following variables:

PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

10. Run the Backend
-------------------
cd backend
npm install
npm run dev

The backend will run on:
http://localhost:5000

11. Run the Frontend
--------------------
cd frontend
npm install
npx expo start

Then open the app in Expo Go or an emulator.

12. API Summary
---------------
Base URL:
http://localhost:5000

Authentication:
- Add the token in the Authorization header as:
  Authorization: Bearer <token>

Public Routes:
- POST /api/auth/register
- POST /api/auth/login

Protected Routes:
- GET /api/auth/me
- GET /api/rooms
- GET /api/rooms/:id
- POST /api/bookings
- GET /api/bookings
- GET /api/bookings/:id
- PUT /api/bookings/:id
- DELETE /api/bookings/:id
- PUT /api/bookings/:id/cancel

Admin Routes:
- POST /api/rooms
- PUT /api/rooms/:id
- DELETE /api/rooms/:id
- PUT /api/bookings/:id/approve
- PUT /api/bookings/:id/reject

13. Main API Functionality
--------------------------
Auth APIs:
- Register new users
- Login and get JWT token
- Fetch logged-in user profile

Room APIs:
- List rooms
- Search rooms by room number or filters
- View room details
- Create room entries (admin only)
- Update room information (admin only)
- Delete room records (admin only)

Booking APIs:
- Create booking requests
- List bookings for the logged-in user or all bookings for admin
- View booking details
- Update pending bookings
- Cancel bookings
- Admin approve/reject workflow

14. Common Response Codes
-------------------------
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
500 Internal Server Error

15. Project Status
------------------
This project is a full-stack hostel room booking system designed as a
mobile application with backend services and database integration.
It covers user authentication, room management, and booking operations in a
real-world hostel management scenario.

16. Student Information
-----------------------
Student ID: IT23703612
Student Name: Wickramasingha S.S

17. Team Details
---------------------
Backend URL: https://backend-seven-nu-36.vercel.app/api
=====================================================================
 End of Project Documentation
=====================================================================

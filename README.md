# Interactive_Form_Validation_NM

Overview

This project demonstrates an interactive form validation system built using HTML, CSS, and JavaScript — without relying on any frameworks like React or Node.js.
The form provides real-time validation for user inputs such as name, email, password, and confirmation, with instant feedback messages and visual highlights.
It follows modern UI/UX principles with a floating card design, centered layout, and subtle shadow effects to give a clean and professional look.

Features

Real-time form validation using JavaScript.

Error and success states for each field.

Password confirmation matching.

Clean and responsive UI using Flexbox.

Lightweight and framework-free (pure HTML, CSS, JS).

Animated transitions for better user feedback.

Validates on both input and form submission.

Folder Structure
interactive-form-validation/
│
├── index.html          # Main HTML file (form layout)
├── style.css           # CSS for layout, design, and animations
├── script.js           # JavaScript for validation logic
└── README.md           # Project documentation

Validation Rules
Field	Validation Rule
Full Name	Must not be empty and should contain only letters and spaces.
Email	Must match standard email pattern (e.g., user@example.com
).
Password	Must be at least 8 characters long and contain letters and numbers.
Confirm Password	Must exactly match the entered password.
How It Works

The user types input into each field.

JavaScript listens for input events and validates each field instantly.

If validation fails, an error message and red outline appear.

Once all fields pass validation, the submit button becomes active.

On submission, the form displays a success message.

Installation & Setup

Download or Clone the Repository

git clone https://github.com/your-username/interactive-form-validation.git


Open the Project
Navigate to the project folder and open index.html in your browser.

No Dependencies Required
This project runs directly in any modern web browser — no setup, build tools, or server needed.

File Descriptions
index.html

Defines the structure of the form, including fields for full name, email, password, and confirm password.
Includes links to style.css and script.js.

style.css

Handles the design, layout, and animations:

Centers the form card using Flexbox.

Adds floating shadows for depth.

Styles input fields, labels, and buttons for modern appearance.

script.js

Implements the interactive logic:

Real-time validation checks for each input.

Custom error messages.

Dynamic button state updates.

Form reset on successful submission.

Example User Flow

User enters details.

Invalid fields show red borders and error messages.

Once all fields are valid, the button becomes clickable.

User submits the form and receives a success alert.


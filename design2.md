## CSC493: R05: Software Design. Part 2<sup>1</sup>

## Overview
You have created the <code>design.md</code> file that should have started to outline the design components for your project.

Design is so important that we will dedicate this week to further flesh out your file with more details of your design, building off of 
what you did for [R04.design](R04.design.md) 

*DO NOT TAKE THIS AN OPPORTUNITY TO SLACK OFF.* 

## Documentation

<code>design.md</code>

Enahnce your <code>design.md</code> file with more details. You will be reporting out on the improvements you made on Tuesday, explaining why you made the changes you did.

## Improved Design

I’m building an e-commerce website where users can view products, add them to their cart, and make purchases. I’m using HTML, CSS, and JavaScript for the frontend, and Node.js for the backend.

Here are the major components of my system:

Frontend: This includes all the user-facing parts of my website. It’s built using HTML (for structure), CSS (for styling), and JavaScript (for interactivity).

Backend: This is where all my business logic resides. It’s built using Node.js. It handles tasks like user authentication, database operations, and server-side rendering.

Database: This is where all my data is stored. I could use a SQL database like PostgreSQL or a NoSQL database like MongoDB.

The hierarchy of my system can be visualized as follows:

User Interface (Frontend): The top layer that interacts with the users.
Server (Backend): The middle layer that processes requests and responses.
Database: The bottom layer that stores and retrieves data.
Here’s a simplified flow of control and data through my system:

A user interacts with the frontend of my website (e.g., clicking on a product).
The frontend sends a request to the backend (e.g., to add the product to the user’s cart).
The backend processes this request, performs the necessary database operations, and sends a response back to the frontend.
The frontend updates the user interface based on this response (e.g., showing the product in the user’s cart).
I ensure to follow consistent naming conventions for my variables, functions, classes, etc., across my codebase. This makes my code easier to read and maintain.

I can reason about my system by tracing how data flows through it or how certain features are implemented across the different layers of my system.

I remember to use methods where appropriate to encapsulate functionality and make my code more modular and easier to manage.



<code>README.md</code>

You should update the <code>README.md</code> file with any updates as necessary. Do not skip this step if your idea has changed. We will look for consistency with your project and your description.

- Project name
- Project Concept (linked to <code>concept.md</code>)
- Vision<br>
The paragraph of your vision is here.
- Scope<br>
The paragraph of your scope is here.
- Prerequisites
- Requirements (linked to <code>requirements.md</code>)
- Design (linked to <code>design.md</code>)
- Built With
- Author name
- Acknowledgments

---
# To Submit
In addition to creating the <code>design.md</code> file, update <code>README.md</code> as necessary. 

Make sure your repo is current by pushing any changes.

<sub>1. Adapted from [https://github.com/pearcej/pearcej.github.io/edit/master/csc493/r04-design.md]

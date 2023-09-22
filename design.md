## CSC493: R04: Software Design<sup>1</sup>

## Overview
You have created the <code>requirements.md</code> file that should have started to outline the requirements for your project.

This week’s new work will move from the planning and analysis phase to beginning to the design phase of the software project.

It is well understood by strong software developers that the functional elements of a program should not
ever be allowed to become too large. If any component of a program grows beyond the size where it's
readily comprehensible as a unit, it can too easily conceal errors. Thus, any software with large
components is likely to be harder to read, harder to test, and harder to debug. The design process
clarifies exactly how the developer plans to implement the design specifications, i.e. how the software is
to be written, and with which small components. In particular, the main work of this first part of the
design phase is to present an architectural model of the software components.

## Documentation

You have some tasks to complete before next time:
- Complete the Preliminary Software Requirements Specification (SRS) document that you have been working for a while now.
- Create and complete a file called <code>design.md</code>.
- Update <code>README.md</code> to link to the file you just created.

### Create a new file called <code>design.md</code>.

Ultimately, the software architectural design must be:

Frontend (React):
Home Component (Home.js): This will be the landing page of the website. It will use React’s render() method to display the home page layout.
Product List Component (ProductList.js): This will display all the products available in the store. It will use React’s componentDidMount() method to fetch product data from the backend when the component is loaded.
Product Detail Component (ProductDetail.js): This will show detailed information about a specific product when a user clicks on it. It will use React’s componentDidMount() method to fetch detailed product data from the backend when the component is loaded.
Cart Component (Cart.js): This will show all the products added to the cart by the user. It will use React’s componentDidMount() method to fetch cart data from the backend when the component is loaded.
Checkout Component (Checkout.js): This will handle the checkout process. It will use React’s componentDidMount() method to fetch checkout data from the backend when the component is loaded.
Backend (Django):
Product API (views.py in products app): This will handle all requests related to products (e.g., get all products, get a specific product). It will use Django’s get() and post() methods in APIView class to handle HTTP GET and POST requests.
Cart API (views.py in cart app): This will handle all requests related to the cart (e.g., add a product to the cart, remove a product from the cart). It will use Django’s get(), post(), and delete() methods in APIView class to handle HTTP GET, POST, and DELETE requests.
Order API (views.py in orders app): This will handle all requests related to orders (e.g., create an order, get order details). It will use Django’s get() and post() methods in APIView class to handle HTTP GET and POST requests.
Database:
Will store all data related to products, users, carts, and orders. You can use Django’s built-in ORM for this.
User Authentication:
Will handle user registration, login, and session management. You can use Django’s built-in authentication system for this.

**Note: For next time, you only need to begin this work. You will be fleshing out more details in over the next week.
So, feel free to use a very high level design for next time.**

## Update README.md
Open the README.md and insert an entry called "Design" that is linked to the design.md file.

README.md

Project name: J-Elegance.com
Project Concept [concept](linked to concept.md)
Project proposal
Vision
Remember that the paragraph of your vision is here.
Scope
Remember that the paragraph of your scope is here.
Prerequisites
Requirements (linked to requirements.md)
Design (linked to design.md)
Built With
Author name: Jarine Fietsop
Acknowledgments: None
To Submit
In addition to creating the design.md file, update README.md as necessary.

1. Adapted from https://github.com/pearcej/pearcej.github.io/edit/master/csc493/r04-design.md

## Scope and Vision
We have a very constrained time-frame in this course to complete a sizable project. This means that scaling the scope of your project is very important. In English, the word “scope” means the range, size, or extent of something. In software development, one creates a Vision and Scope Document to clearly specify what the software developers understand to be their tasks. Scope and vision are tied very close together -- an overly ambitious vision may results in too many features to end up out of scope. "Out of scope” tasks are what the software developers assume are NOT their responsibility but for future development. In the business world, clarifying the scope and limitations helps to establish realistic expectations of the stakeholders and provides a reference frame against which proposed features and requirements changes can be evaluated. For this class, you should think very carefully about what you considered “out of scope”. You want to be ambitious and make something that you are proud to show off with as many cool features as possible but be realistic about your capabilities.

We will use the Agile development model of software development to help with adjusting to what you determine as part of your scope and as such, scope is also a living document that we will only change when absolutely necessary. We start with a core component of your system (a proof of concept) you build first and early in the semester. You will then follow a cycle where you

pick and build a new small component
test the component in isolation with expected inputs and outputs (unit testing)
integrating the component into your system
test the new system
maybe adjusting the design and scope
go back to step 1
Note that it would be advisable to implement and test as many components as possible between weekly report outs so that you can gauge your progress. You can also expect to encounter errors as you develop your system, and as long as you have a working (not necessarily perfect) system, you are making progress. You are to create issues in GitHub for things that you mean to fix and they can be a mix of bugs in your implementation and more aesthetic problems (the button on a web page is the wrong color, and so forth). As long as you feel as though you are progressing with the functionality of your system, the scope should not change.

Where to insert your Scope and Vision
In your README.md file, add the scope and vision paragraphs below the project concept section.

## README.md

Project name: J-Elegance.com
Project Concept (linked to concept.md)
[Scope]:  J-Elegance.com will be a website that will incorporate listings of traditional outfits from West Africa, western culture, French, and Central America. I have planned to not just list clothes but also to have listings of women's accessories, lipsticks, lashes, eye shadows, etc. I will like to make it a small online store where people could stop by and be able to find the things that they need. The website is going to have about 4 pages; the home page, help page, Checkout page, and about page. More pages may be added as needed.

[Vision]: The main purpose of J-Elegance is  to share my sense of Fashion with the world. I want the world to have a feeling of the rich West African culture through our costumes. I want people of every race, sex, and gender to feel placid and gratified putting on clothes from J-Elegance.


Built With JavaScript, Bootsrap, node.js
Author name: Jarine Fietsop
Acknowledgments: Deanna Wilborn, Joy Mirembe
Preliminary Software Requirements Specifications (SRS)
Once you have defined your vision and scope a bit more, we go into more detail about WHAT is needed.

What is an SRS document?
A Software Requirements Specification (SRS) is a written understanding of system requirements prior to any actual design or implementation work. The SRS document states in precise and explicit language those functions and capabilities a software system must provide and any required constraints which the system must follow. An SRS contains functional and nonfunctional requirements only, rather than design ideas.

Functional requirements
The website is supposed to be user-friendly with a high level of usability. I would like the users to have the same experience they have when purchasing 
from Amazon or Shein. I want the users to add things to their carts, change the items in their carts if they would like, and check out with ease. I would 
like to set up the backend such that it is able to process payments. If the users are not satisfied with their products, I would like them to be able 
to return the products and have their money returned to them.

Non-functional requirements
I would like the website to have a return policy that can return the money of customers if they do not like their products.
This will be a great quality but I am not very sure if I will be able to implement this step.

Creating your SRS
Create a new file called requirements.md in your repository. Using your stated Scope as a guide, precisely and explicitly describe the primary software requirements using the following template for each specific requirement:

Number: (List unique requirement number.)
Statement: (Precisely state the requirement.)
Evaluation Method: (How can you tell if the completed software satisfies this requirement?)
Dependency: (List each other requirement on which satisfaction of this requirement depends or write "None")
Priority: (Assign a priority to this requirement: essential, high, middle, low, or if time permits.)
Requirement revision history: (when, what, and why)
Be sure that you list each requirement separately rather than combining two or more.

To Submit
See Awesome READMEs for a list of great README files. In addition to creating the requirements.md file, update README.md as necessary.

1. Adapted from https://github.com/pearcej/pearcej.github.io/blob/master/csc493/r02-scope.md

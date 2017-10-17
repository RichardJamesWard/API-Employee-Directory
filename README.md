# Use a Public API to Create an Employee Directory
### Treehouse Techdegree Project #5 - Use a Public API to Create an Employee Directory

Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.

Awesome Startup is a distributed company with employees working all over the world. They need a smart way to for employees to share contact information with each other. In this project, you’ll use the Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. You’ll request a JSON object from the API and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.


# Project Requirements

### API Usage
- [x] 12 random users are pulled from the the API
- [x] New random employee information displays each time the page refreshes
### User Directory
- [x] The directory includes the following:
  * Employee Image
  * First and Last Name
  * Email
  * City
- [x] Employees can be filtered by name or username
### Modal Window
- [x] Modal window displays the following details:
  * Employee image
  * Name
  * Email
  * Cell Number
  * Detailed Address, including street name and number, city, country and post code.
  * Birthdate
- [x] There is a way to close the modal window
- [x] Functionality has been added to switch back and forth between employees when the detail modal window is open.
### Matching the Mockups
- [x] Directory has been styled so that all the major elements are in place and roughly matches the mockups


# View Project
[Live Demo]( https://richardjamesward.github.io/API-Employee-Directory/) of this project for peer review.


# Appraiser Comments
Great work on this project. You've stepped into two new worlds in JavaScript in this project: asynchronous processes, or things that take time to complete, and http requests. Both of these ideas we'll be using a lot from here on out in the Techdegree. For the future if you're making an ajax request from the browser, let me suggest the new fetch api. We haven't covered it in the curriculum yet, but it's useful and supported in most browsers now.

Have you thought about trying out peer review? You did such an awesome job on this project that I think other students could really benefit from your insight and advice. It’s a great opportunity to gain some experience reading code and learning alternative ways to approach problems, so consider giving it a try! You’ll find the link to a short training video along with a list of available projects in the new “Peer Review” tab on your Techdegree homepage.

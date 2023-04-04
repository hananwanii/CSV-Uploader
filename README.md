# CSV-Uploader

## About The Project

User can upload the csv files from their own system. the Application shows the data of CSV file in Tablel format and where user can also perform some operations.
Tech Stack : HTML, CSS, JS, Node.js

### Features :

-  Upload any csv file into the system (consider the delimiter to be a comma ‘ , ’) [If you don’t know
   what’s a csv, download the other file in this folder and take a look at it, then google a little more]
-  Display a list of all uploaded csv files
-  When the user selects a file, display all the data (with column headers) in a table on the page (front
   end)
-  There should be a search box which searches on the front end itself and displays the matching rows
   of the table only (empty search box displays all the data). (you can put a search on any one column)
-  DIFFERENT CSV FILES WITH DIFFERENT COLUMN HEADERS CAN BE UPLOADED,TABLE HEADERS SHOULD BE DYNAMIC
-  Sorting button (ascending and descending) for each column on the front end
-  Put a validation on the front end and server side on being able to upload only csv
   type of files
-  Pagination of the data displayed in the table to a max of 100 records per
   page

### Built With

Here is the Technology Stack of this Application. which I have used to Built this Application.

-  MongoDB
-  Express
-  NodeJS
-  HTML
-  CSS

<!-- GETTING STARTED -->

## Getting Started

-  Clone this project
-  Start by installing npm and mongoDB if you don't have them already.
-  Run the Mongo Server.


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm start

## Directory Structure and flow of The Code

This code follows MVC pattern and hence everything is differentiated and well managed:

    Upload-CSV
        |-----assets
        |       |--- css
        |       |     |-- file.css
        |       |     |-- home.css
        |       |--- JS
        |             |-- file.js
        |------ config
        |         └--- mongoose.js
        |------ controller
        |         └--- fileController.js
        |------ models
        |         └--- fileModel.js
        |------ routes
        |         └--- index.js
        |------ uploads
        |         |--- files
        |------ views
        |         |--- file.ejs
        |         |--- home.ejs
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

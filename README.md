# js1-ca


Course Assignment

Brief
Level 1 is required.
Level 2 is optional.

Choosing appropriate variable and function names will form part of your assessment, as will proper and consistent formatting of your code.

///Level 1 Process///

XX - Find an API 
Search for a public, free-to-use API.

You will need to make two calls to this API:

to fetch an array of results (do display on index)
OK

to fetch a single result using an id, name, or other property (to display on details)
seed

You will need to read the API’s documentation to see what URLs are available, if they require a key to be sent in the header, and any other configuration they might need.

There are many free APIs discoverable by a Google search.

You may not use the APIs used in the lessons.



I have chosen to use https://randomuser.me/api/






- Styling
The focus of the CA is on JavaScript, not styling. Yet, as a front-end developer you will always need to produce user-interfaces that make sense and are easy to follow. - - You will need to provide navigation to and from the home page (index.html) and the contact page.

Both API calls should include a loading indicator.


//index.html//
Make a call to your API URL. 
Loop through the results and create HTML for each result.
I load 12 objects

You must display at least 3 different properties inside the HTML. It’s not required to display an image.
image
@username, 
Full name

You will need to link each result to a details.html page and to pass a parameter in the query string to that page. 
seed

If you are going to fetch the individual result on the details page by its id, then pass an id in the query string. 
seed

If you will be retrieving by another property, like name for example, pass the name in the query string., 
seed

You will fetch this parameter from the query string in the details page code. seed


Catch any errors and display a message on the page if an error occurs.

"ooopsie, something went wrong"

//details.html//
(Remember, you will need a parameter in the query string on this page, so either click through to it from the index page or manually add a parameter to the URL).

Retrieve the id, name or other parameter from the query string.
seed

Once you have the parameter, add it to the API URL in the format the API requires. one "loop" (that is, not a loop)



Make an API call using the URL you create. 
url + seed, make a variable for seed

Display at least 3 different properties from the received JSON on this page.
much the same

Set the title of the HTML page to be one of the property values, like name, title or another relevant property.
@username

Catch any errors and display a message on the page if an error occurs.


//contact.html//
Create a form with the following inputs and validation rules.

Name - required
Subject - must have a value with a minimum length of 10
Email - must have a value and be formatted like an email address
Address - must have a value with a minimum length of 25
When the form on this page is submitted, write code to validate the input. If any of the inputs fail validation display an error message for the relevant input.

////////////////////////////////////////////////////////////////////////////////

Level 2 Process
contact.html
If all validation passes, add a message above the form indicating the form passed validation.

- Information

Rules
Sharing APIs and copying of any code will result in your assignment being given a mark of ‘not passed’. Please do not plagiarise.
You may only use plain JavaScript for this assignment, no libraries or frameworks. You will be given a mark of ‘not passed’ if you use a library or framework for your JavaScript code.

Submission
Create a folder called your-name-js1-ca, e.g. mary-smith-js1-ca
Add all your code to this folder, zip the folder and submit the zip file

Time
40 hours
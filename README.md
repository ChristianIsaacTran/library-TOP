# library-TOP
Project: Library from the JavaScript course. This is to demonstrate and practice prototype inheritance.


# Constraint validation TOP - in advanced javascript course 05/21/2025

Came back from a future lesson to add constraint validation 
in javascript with the constraint API.

#Updates 5/21/2025

Successfully added constraint validations to the modal form for the title, author, and number input fields. Before I implemented the 
form validation in javascript, the user was able to submit and create books that had empty names, authors, and negative page numbers. 
Now it displays appropriate error tooltips everytime the input fields change value and prevents the user from submitting the form 
if there are invalid fields. 

#Notes on constraint validation

So, I discovered that the constraint validation API is very manual and requires some toggling in order to do what I want it to do. 
Some quirks I found are: 

- when using the .setCustomValidation("Some error"); this sets the HTML element to the "invalid" state, meaning that I marked it as invalid
  if I gave it a custom validation error message. The only way to unflag it is to call the .setCustomValidation("") again, but with an empty
  string for its parameter.

- even though you set an HTML element to the invalid state with a custom error message with .setCustomValidation(), the tooltip/error message will
  not display unless specified by calling the .reportValidity(), or by default when trying to submit the form. (When you submit a form, by default,
  the form will display any invalid tooltips you have missed.)

- setting something to the "invalid" state will not let the user submit the form without clearing all of the invalid states first. (unless the form has
  the "novalidate" attribute on it) 

# Password-Generator

This weeks project was to create a password generator that asked you to use 4 different types of characters to create a password.

Upon opening the page it should ask you to select a number of characters between 8 and 124.
If you dont choose between 8 and 124 it will tell you that you must choose between 8 and 124 characters.
It will then ask you 4 consectutive promopts of what kind of characters you want to use.
Do you want to have confirm

    lowerLetter = confirm("Do you want lower case letters?");
    upperLetter = confirm("Do you want upper case letters?");
    specialCharacter = confirm("Do you want special characters?");
    number = confirm("Do you want numbers");
    
 Depending on your picks the code will then wrong the correct else if to create the following code. 
 For example if you want numbers and upper case letters only you'll then get a random generated number such as 76DSDG76D79.
 
 The password then will be generated in the center of the box. 
 
 If you do not like said password, you do have the option to re-generate by again clicking the generate button instead of refreshing the page.
 

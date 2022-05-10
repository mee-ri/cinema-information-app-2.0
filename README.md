# Cinema Information App 2.0
![Preview](images/preview.png "Preview")

## Project Description
Project 3 for *Dynamic Web Applications with JavaScript* course (Laurea UAS 5 ects). The aim was to redo a previously made app, now using jQuery. This is an improved version of my [Cinema Information App](https://github.com/mee-ri/cinema-information-app).

#### Requirements
- DOM scripting and AJAX calls made with jQuery
- Some jQuery effects used (e.g. fadeIn(), fadeOut(), animate())
- Layout stylized with a component library (e.g. Bootstrap)
- JavaScript and CSS kept in external files
- Code is formatted and commented

## Features  
 :abc: User can choose an area or a specific cinema from a drop-down menu that lists the predefined options based on the user's data input   
 :mag_right: User can choose an area or a specific cinema by using custom search string field  
 :star: Search field recognizes some popular nicknames used for cinemas (such as *"Tennari"* for Helsinki Tennispalatsi or *"Omppu"* for Espoo Omena)  
 :exclamation: Empty or incorrect searches fire an alert box  
 :ticket: After a cinema has been successfully chosen, flippable schedule cards will be smoothly faded in (500 ms) with the following data:  
 **front**: date, an image of the movie poster, movie title, starting time, and auditorium details  
 **back**: age rating, content descriptors, language, subtitle languages, premiere date, and duration  
 :eyes: Age rating and content descriptor images are enlargened when user hovers mouse over them  
 :white_flag: In case there are no shows on the current date, user is informed by an alert box  
 :heavy_plus_sign: Clicking on the call-to-action *Osta lippu* opens a link to the movie's synopsis page on Finnkino in a new tab  
 :top: "Scroll to top" button is smoothly faded in (1000 ms) and becomes clickable when the user scrolls down 20px from the top of the document. Button is faded out (500 ms) on the reverse action.  
 :bookmark: Tooltips are attached to age ratings, content descriptors, CTA link, and scroll button  

## How to Run
This application is published in Netlify: https://gleaming-lokum-242fa7.netlify.app/

## Technologies
- JavaScript
- HTML
- CSS

## Reflection
I have been bitten by the coding bug! :fire: This project didn't feel like mandatory schoolwork at all but rather a fun activity that I loved working on! I really enjoyed learning about jQuery, which turned out to be easy to understand and logical. It truly enables you to "write less, do more". I was excited to test jQuery's different animations and effects, and decided to implement them in a subtle way, as I believe less is more when using them. :ok_hand::sunglasses:  
  
I wanted to make additional improvements to my previous code and thought it would be smart to change the hard-coded theatre and area list into a dynamic version. I used the code below to retrieve an up-to-date theatre list on loading the page, as to eliminate the need to manually update the cinema listing in case new theatres are opened or old ones are closed. Unfortunately, though, when making the AJAX call, I ran into a CORS error and was unable to solve it.  

```
var theatreList;
window.onload = insertTheatreList();

// Retrieve up-to-date theatre list from Finnkino API
var url1 = "https://www.finnkino.fi/xml/TheatreAreas/";
function insertTheatreList(){
 $.get(url1, function(data){
   var j;
   var z = $(data).find("TheatreArea");
   for (j=0; j < z.length; j++) {
      theatreList += "<option value='"+
      $(z[j]).find("Name")[0].childNodes[0].nodeValue + "'></option>";
   }
 });
$("datalist").html(theatreList);
}
```  
  
I was also unable to figure out why my for loop creates empty datacells in between cells. Although it doesn't affect the app and the cells are only visible when you check the code in a dev tool, I wish I was able to solve the mystery. :sweat_smile: 
  
Bootstrap was something I had been briefly acquainted with during a previous Laurea course. I refamiliarized myself with it, but will have to save exploring it more for future projects. :blush:

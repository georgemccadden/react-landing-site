// Create the h1 element
var h1 = document.createElement("H1");

// Create the text element with the text you want to display in the h1
var text = document.createTextNode("Here is my H1 text");

// Append the text node to the h1 element
h1.appendChild(text);

// Append the h1 element to the document body to display its contents
document.body.appendChild(h1);

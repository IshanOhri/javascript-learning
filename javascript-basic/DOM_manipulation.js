document.write("<h1> DOM manipulation in javascript </h1>");

function buttonClicked() {
    //alert("You just clicked the button");

    // document is a predefined object that reprents the entire HTML document loaded into the browser.
    // Using document, we can access certain predefined methods and functions.
    // innerHTML is the pre-defined property in "heading2" object.
    
    document.getElementById("heading2").innerHTML = "Text changed using getElementById method.";                  
    
}
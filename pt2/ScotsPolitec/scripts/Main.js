//Daniel Russell
//external javascript used for main functionality common accross multiple pages

//navigates to homepage, used for website logo when clicked
function navHome(){
    window.location.href = "./Home.html";
}

//navigates to jobs statistics, used by regionmap and constituency, utalizes a set postcode local
//to regionmap or consitituency
function navJobStatPostcode(postcode){
    window.location.href = "./RegionJob.html?Postcode=" + postcode;
}

//accessability option 1, enlarge text, increases size of the text by changing the elements style
function textEnlarge(){
    document.getElementById("Body").style.fontSize = "larger";
    document.getElementById("Header").style.fontSize = "larger";
    document.getElementById("Footer").style.fontSize = "larger";
}

//accessability option 2, shrink text, shrinks size of the text by changing the elements style
function textShrink(){
    document.getElementById("Body").style.fontSize = "smaller";
    document.getElementById("Header").style.fontSize = "smaller";
    document.getElementById("Footer").style.fontSize = "smaller";
}

//accessability option 3, reset text, resets the size of the text by changing the elements style
function textReset(){
    document.getElementById("Body").style.fontSize = "initial";
    document.getElementById("Header").style.fontSize = "initial";
    document.getElementById("Footer").style.fontSize = "initial";
}
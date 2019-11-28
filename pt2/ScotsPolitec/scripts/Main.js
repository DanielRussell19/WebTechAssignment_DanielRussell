function navHome(){
    window.location.href = "./Home.html";
}

function navJobStatPostcode(postcode){
    window.location.href = "./RegionJob.html?Postcode=" + postcode;
}

function navJobStatRegion(){
    window.location.href = "./RegionJob.html?Region=G50ru";
}

function textEnlarge(){
    document.getElementById("Body").style.fontSize = "larger";
    document.getElementById("Header").style.fontSize = "larger";
    document.getElementById("Footer").style.fontSize = "larger";
}

function textShrink(){
    document.getElementById("Body").style.fontSize = "smaller";
    document.getElementById("Header").style.fontSize = "smaller";
    document.getElementById("Footer").style.fontSize = "smaller";
}

function textReset(){
    document.getElementById("Body").style.fontSize = "initial";
    document.getElementById("Header").style.fontSize = "initial";
    document.getElementById("Footer").style.fontSize = "initial";
}
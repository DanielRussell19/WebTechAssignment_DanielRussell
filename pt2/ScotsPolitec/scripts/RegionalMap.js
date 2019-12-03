var submitPostcode;

function clearSelection(){
    var selectionbox = document.getElementById("conListing");

    for(i = selectionbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectionbox.remove(i);
    }

    console.log("Cleared");
}

//navigates to constituency, used by regionmap, utalizes a set postcode local to the consitituency
function navConPostcode(){

    if(submitPostcode != null && submitPostcode != ""){
        window.location.href = "./Constituency.html?Postcode=" + submitPostcode;
    }
    else{
        alert("Please select a consituency");
    }
    
}

function changePostcode(){

var selectionbox = document.getElementById("conListing");
var selectedCon = selectionbox.options[selectionbox.options.selectedIndex].text;

if(document.getElementById("labelSelected").innerHTML == "Select Region: West Scotland")
{
    switch (selectedCon)
    {
        case "Clydebank and Milngavie":
            submitPostcode = "G816DL";
            break;
        case "Cunninghame North":
            submitPostcode = "KA256ET";
            break;
        case "Cunninghame South":
            submitPostcode = "KA120AA";
            break;
        case "Dumbarton":
            submitPostcode = "G830DN";
            break;
        case "Eastwood":
            submitPostcode = "G776AA";
            break;
        case "Greenock and Inverclyde":
            submitPostcode = "PA168BQ";
            break;
        case "Paisley":
            submitPostcode = "PA26AD";
            break;
        case "Renfrewshire North and West":
            submitPostcode = "PA75HL";
            break;
        case "Renfrewshire South":
            submitPostcode = "PA91BQ";
            break;
        case "Strathkelvin and Bearsden":
            submitPostcode = "G644ES";
            break;
    }
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Central Scotland")
{
    switch (selectedCon)
    {
        case "Airdrie and Shotts":
            submitPostcode = "ML74NB";
            break;
        case "Coatbridge and Chryston":
            submitPostcode = "G698AJ";
            break;
        case "Cumbernauld and Kilsyth":
            submitPostcode = "G680AR";
            break;
        case "East Kilbride":
            submitPostcode = "G743XB";
            break;
        case "Falkirk East":
            submitPostcode = "FK20JN";
            break;
        case "Falkirk West":
            submitPostcode = "FK41ES";
            break;
        case "Hamilton":
            submitPostcode = "ML37XY";
            break;
        case "Larkhall and Stonehouse":
            submitPostcode = "ML37XY";
            break;
        case "Motherwell and Wishaw":
            submitPostcode = "ML28HL";
            break;
        case "Uddingston and Bellshill":
            submitPostcode = "ML42EB";
            break;
    }
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Glasgow")
{
    switch (selectedCon)
    {
        case "Glasgow Anniesland":
            submitPostcode = "G156TH";
            break;
        case "Glasgow Cathcart":
            submitPostcode = "G429DZ";
            break;
        case "Glasgow Kelvin":
            submitPostcode = "G36DR";
            break;
        case "Glasgow Maryhill and Springburn":
            submitPostcode = "G209AX";
            break;
        case "Glasgow Pollok":
            submitPostcode = "G522BW";
            break;
        case "Glasgow Provan":
            submitPostcode = "G335LA";
            break;
        case "Glasgow Shettleston":
            submitPostcode = "G320HZ";
            break;
        case "Glasgow Southside":
            submitPostcode = "g50ru";
            break;
        case "Rutherglen":
            submitPostcode = "G727PP";
            break;
    }
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Highlands and Islands")
{
    switch (selectedCon)
    {
        case "Argyll and Bute":
            submitPostcode = "PA318NX";
            break;
        case "Caithness":
            submitPostcode = "IV274BL";
            break;
        case "Sutherland and Ross":
            submitPostcode = "IV274BL";
            break;
        case "Inverness and Nairn":
            submitPostcode = "PH233BG";
            break;
        case "Moray":
            submitPostcode = "AB389LB";
            break;
        case "Na h-Eileanan an Iar":
            submitPostcode = "HS12TD";
            break;
        case "Orkney Islands":
            submitPostcode = "KW172QH";
            break;
        case "Shetland Islands":
            submitPostcode = "ZE29PX";
            break;
        case "Skye":
            submitPostcode = "PH344EU";
            break;
        case "Lochaber and Badenoch":
            submitPostcode = "PH344EU";
            break;
    }
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Lothian")
{
    switch (selectedCon)
    {
        case "Almond Valley":
            submitPostcode = "EH558AZ";
            break;
        case "Edinburgh Central":
            submitPostcode = "EH22AA";
            break;
        case "Edinburgh Eastern":
            submitPostcode = "EH152QN";
            break;
        case "Edinburgh Northern and Leith":
            submitPostcode = "EH64LP";
            break;
        case "Edinburgh Pentlands":
            submitPostcode = "EH145AA";
            break;
        case "Edinburgh Southern":
            submitPostcode = "EH104QE";
            break;
        case "Edinburgh Western":
            submitPostcode = "EH309TU";
            break;
        case "Linlithgow":
            submitPostcode = "EH481TP";
            break;
        case "Midlothian North and Musselburgh":
            submitPostcode = "EH218SE";
            break;
    }   
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: South Scotland")
{
    switch(selectedCon)
    {
        case "Ayr":
            submitPostcode = "KA71DX";
            break;
        case "Carrick":
            submitPostcode = "KA181LW";
            break;
        case "Cumnock and Doon Valley":
            submitPostcode = "KA181LW";
            break;
        case "Clydesdale":
            submitPostcode = "ML117PX";
            break;
        case "Dumfriesshire":
            submitPostcode = "DG112SA";
            break;
        case "East Lothian":
            submitPostcode = "EH403BB";
            break;
        case "Ettrick":
            submitPostcode = "TD99QE";
            break;
        case "Roxburgh and Berwickshire":
            submitPostcode = "TD99QE";
            break;
        case "Galloway and West Dumfries":
            submitPostcode = "DG86HR";
            break;
        case "Kilmarnock and Irvine Valley":
            submitPostcode = "KA36ED";
            break;
        case "Midlothian South":
            submitPostcode = "EH458EP";
            break;
        case "Tweeddale and Lauderdale":
            submitPostcode = "EH458EP";
            break; 
    }
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Mid Scotland and Fife")
{
    switch (selectedCon)
    {
        case "Clackmannanshire and Dunblane":
            submitPostcode = "FK125JT"; 
            break;
        case "Cowdenbeath":
            submitPostcode = "KY49SF"; 
            break;
        case "Dunfermline":
            submitPostcode = "KY129GQ"; 
            break;
        case "Kirkcaldy":
            submitPostcode = "KY25LF"; 
            break;
        case "Mid Fife and Glenrothes":
            submitPostcode = "KY75QF"; 
            break;
        case "North East Fife":
            submitPostcode = "KY155JU"; 
            break;
        case "Perthshire North":
            submitPostcode = "FK83UG"; 
            break;
        case "Perthshire South and Kinross-shire":
            submitPostcode = "PH31BJ"; 
            break;
        case "Stirling":
            submitPostcode = "FK178EX"; 
            break;   
    }
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: North East Scotland")
{
    switch (selectedCon)
    {
        case "Aberdeen Central":
            submitPostcode = "AB251XF"; 
            break;
        case "Aberdeen Donside":
            submitPostcode = "AB210ER"; 
            break;
        case "Aberdeen South and North Kincardine":
            submitPostcode = "AB124QA"; 
            break;
        case "Aberdeenshire East":
            submitPostcode = "AB419AD"; 
            break;
        case "Aberdeenshire West":
            submitPostcode = "AB338QB";    
            break;
        case "Angus North and Mearns":
            submitPostcode = "AB31QN";
            break;
        case "Angus South":
            submitPostcode = "DD76LE";    
            break;
        case "Banffshire and Buchan Coast":
            submitPostcode = "AB423GT";
            break;
        case "Dundee City East":
            submitPostcode = "DD13JN";
            break;
        case "Dundee City West":
            submitPostcode = "DD13BA";
            break; 
    }
}

if(selectedCon == "" || selectedCon == null){
    submitPostcode = "";
}

console.log(selectedCon);

}

function navJobStat(){

if(submitPostcode != null && submitPostcode != ""){
    console.log(submitPostcode);
    navJobStatPostcode(submitPostcode);
}
else{
    alert("Please select a consituency");
}

}

//Google Maps API
var map;
var selectRegion;
var selectConstituancy;
    
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), 
    {
     center: {lat: 57.055355,lng: -2.519492},
     zoom: 7,
     mapTypeControl: false,
     streetViewControl: false,
     rotateControl: false,
     fullscreenControl: false,
     zoomControl:false
    });
    
    var cordNES = new google.maps.LatLng(57.055355, -2.519492);
    var markerNES = new google.maps.Marker({position: cordNES});

    var cordMSF = new google.maps.LatLng(56.374116, -3.843135);
    var markerMSF = new google.maps.Marker({position: cordMSF});
    
    var cordSS = new google.maps.LatLng(55.505761, -3.694097);
    var markerSS = new google.maps.Marker({position: cordSS});

    var cordL = new google.maps.LatLng(55.923157, -3.362933);
    var markerL = new google.maps.Marker({position: cordL});

    var cordCS = new google.maps.LatLng(55.885057, -3.882454);
    var markerCS = new google.maps.Marker({position: cordCS});

    var cordG = new google.maps.LatLng(55.856214, -4.257006);
    var markerG = new google.maps.Marker({position: cordG});

    var cordWS = new google.maps.LatLng(55.935007, -4.587044);
    var markerWS = new google.maps.Marker({position: cordWS});

    var cordHLI = new google.maps.LatLng(57.093798, -4.741072);
    var markerHLI = new google.maps.Marker({position: cordHLI});
    
    markerNES.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: North East Scotland";
        //
        var cons = ["Aberdeen Central","Aberdeen Donside","Aberdeen South and North Kincardine","Aberdeenshire East","Aberdeenshire West","Angus North and Mearns","Angus South","Banffshire and Buchan Coast","Dundee City East","Dundee City West"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;

        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);

        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerMSF.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: Mid Scotland and Fife";
    
        var cons = ["Clackmannanshire and Dunblane","Cowdenbeath","Dunfermline","Kirkcaldy","Mid Fife and Glenrothes","North East Fife","Perthshire North","Perthshire South and Kinross-shire","Stirling"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;
        //
        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);

        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerSS.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: South Scotland";
    
        var cons = ["Ayr","Carrick", "Cumnock and Doon Valley","Clydesdale","Dumfriesshire","East Lothian","Ettrick", "Roxburgh and Berwickshire","Galloway and West Dumfries","Kilmarnock and Irvine Valley","Midlothian South", "Tweeddale and Lauderdale"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;
        //
        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);

        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerL.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: Lothian";
    //
        var cons = ["Almond Valley","Edinburgh Central","Edinburgh Eastern","Edinburgh Northern and Leith","Edinburgh Pentlands","Edinburgh Southern","Edinburgh Western","Linlithgow","Midlothian North and Musselburgh"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;

        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);
        
        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerHLI.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: Highlands and Islands";
    //
        var cons = ["Argyll and Bute","Caithness", "Sutherland and Ross","Inverness and Nairn","Moray","Na h-Eileanan an Iar","Orkney Islands","Shetland Islands","Skye", "Lochaber and Badenoch"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;

        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);

        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });
    
    markerG.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: Glasgow";
    
        var cons = ["Glasgow Anniesland","Glasgow Cathcart","Glasgow Kelvin","Glasgow Maryhill and Springburn","Glasgow Pollok","Glasgow Provan","Glasgow Shettleston","Glasgow Southside","Rutherglen"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;

        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);

        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerCS.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: Central Scotland";
    
        var cons = ["Airdrie and Shotts","Coatbridge and Chryston","Cumbernauld and Kilsyth","East Kilbride","Falkirk East","Falkirk West","Hamilton", "Larkhall and Stonehouse","Motherwell and Wishaw","Uddingston and Bellshill"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;

        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);

        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerWS.addListener('click',function(){
        document.getElementById("RegionMenu").style.display = "inline-block";
        document.getElementById("labelSelected").innerHTML = "Select Region: West Scotland";
    //
        var cons = ["Clydebank and Milngavie","Cunninghame North","Cunninghame South","Dumbarton","Eastwood","Greenock and Inverclyde","Paisley","Renfrewshire North and West","Renfrewshire South","Strathkelvin and Bearsden"];
        var selectionbox = document.getElementById("conListing");
        var i = 0;

        clearSelection();

        con = document.createElement("option");
        con.text = "";
        selectionbox.add(con);
        
        while(i != cons.length)
        {
            con = document.createElement("option");

            con.text = cons[i];
            con.id = i;
    
            selectionbox.add(con);
            i++;
        }
    });

    markerNES.setMap(map);
    markerMSF.setMap(map);
    markerSS.setMap(map);
    markerL.setMap(map);
    markerHLI.setMap(map);
    markerG.setMap(map);
    markerCS.setMap(map);
    markerWS.setMap(map);
}

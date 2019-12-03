var submitPostcode;

function clearSelection(){
    var selectionbox = document.getElementById("conListing");

    for(i = selectionbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectionbox.remove(i);
    }

    console.log("Cleared");
}

function changePostcode(){

var selectionbox = document.getElementById("conListing");
var selectedCon = selectionbox.options[selectionbox.options.selectedIndex].text;

if(document.getElementById("labelSelected").innerHTML == "Select Region: West Scotland")
{
    submitPostcode = "1";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Central Scotland")
{
    submitPostcode = "2";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Glasgow")
{
    submitPostcode = "G50ru";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Highlands and Islands")
{
    submitPostcode = "4";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Lothian")
{
    submitPostcode = "5";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: South Scotland")
{
    submitPostcode = "6";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: Mid Scotland and Fife")
{
    submitPostcode = "7";
}

if(document.getElementById("labelSelected").innerHTML == "Select Region: North East Scotland")
{
    submitPostcode = "8";
}

if(selectedCon == "" || selectedCon == null){
    submitPostcode = "";
}

console.log(selectedCon);

}

function navJobStat(){

if(submitPostcode != null && submitPostcode != ""){
    console.log(submitPostcode);
    //navJobStatPostcode(submitPostcode);
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

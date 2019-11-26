//Onload function extracts user submitted postcode from url and creates a request
//if an authentic postcode, the remainder of the script is executed via success.
//if an unauthentic postcode or request error, user is sent back to homepage.
$(function () 
{
    var request = "https://api.postcodes.io/scotland/postcodes/";
    var submitPostcode = document.URL;
    
    var conCode = 1;
    var conId;

    var personId;
    var personrequest = "https://data.parliament.scot/api/members/";

    var partyId;
    var partyRequest = "https://data.parliament.scot/api/parties/";

    submitPostcode = submitPostcode.substr(submitPostcode.indexOf("=") +1,submitPostcode.length);

    if(submitPostcode.includes("+"))
    {
        a = submitPostcode.slice(0,2);
        b = submitPostcode.slice(submitPostcode.indexOf("+")+1,submitPostcode.length);
        submitPostcode = a+b;

        request = request + submitPostcode;
        console.log(request);
    }
    else
    {
        request = request + submitPostcode;
        console.log(request);
    }

    //Constituency in relation to postcode, stores constituency code
    $.ajax({

        url: request,
        type: "get",
        dataType: "json",
        success: function(data) 
        {
            x = data.result;
            conCode = data.result.codes["scottish_parliamentary_constituency"];
            document.getElementById("ConName").innerHTML = x["scottish_parliamentary_constituency"];
        },
        error: function()
        {
            window.location.href = "./Home.html#ErrorMessage";
        }
                    
    });

    //searches for same constituancy, gets constituency id according to parlament.scot
    $.ajax({

        url: "https://data.parliament.scot/api/constituencies/",
        type: "get",
        dataType: "json",
        success: function(data) 
        {
            console.log(conCode);

            $.each(data, function(i,field){
            if(field.ConstituencyCode == conCode)
            {
                conId = field.ID;
            }
            })
        },
        error: function()
        {
            window.location.href = "./Home.html#ErrorMessage";
        }
    
    });
/*
    //searches for person id with matching constituency id
    $.ajax({

        url: "https://data.parliament.scot/api/MemberElectionConstituencyStatuses/",
        type: "get",
        dataType: "json",
        success: function(data) 
        {

            $.each(data, function(i,field){
            if(field.ConstituencyID == conId)
            {
                personId = field.PersonID;
            }
            })

        },
        error: function()
        {
            //window.location.href = "./Home.html#ErrorMessage";
        }

    });

    personrequest = personrequest.concat(personId.toString());

    $.ajax({

            url: personrequest,
            type: "get",
            dataType: "json",
            success: function(data) 
            {
                if(data.IsCurrent == true)
                {
                    document.getElementById("MspName").innerHTML = data.ParliamentaryName;
                    document.getElementById("MspImage").innerHTML = "<img src= " + data.PhotoURL + " width=300 height=300 alt=PhotoNotFound>";
                }
                else
                {
                    document.getElementById("MspName").innerHTML = "No elect MSP found";
                    document.getElementById("MspImage").innerHTML = "No elect MSP found";
                }

            },
            error: function()
            {
                //window.location.href = "./Home.html#ErrorMessage";
            }

    });

    $.ajax({

        url: "https://data.parliament.scot/api/memberparties",
        type: "get",
        dataType: "json",
        success: function(data) 
        {
                $.each(data, function(i,field){
                if(field.PersonID == personId)
                {
                    partyId = field.PartyId;
                }
                })

        },
        error: function()
        {
            //window.location.href = "./Home.html#ErrorMessage";
        }

    });

    partyRequest = partyRequest.concat(partyId);

    $.ajax({

            url: partyRequest,
            type: "get",
            dataType: "json",
        success: function(data) 
        {
            document.getElementById("MspParty").innerHTML = data.ActualName;
        },
        error: function()
        {
            //window.location.href = "./Home.html#ErrorMessage";
        }
        
    });
*/
})


            //  https://data.parliament.scot/api/constituencies/  S16000122  get ID = 90
            //  https://data.parliament.scot/api/MemberElectionConstituencyStatuses/ where constituencies id = 90 get personid =1848
            //  https://data.parliament.scot/api/members/1848 where personid
            //  https://data.parliament.scot/api/memberparties where personid get party id
            //  https://data.parliament.scot/api/parties/ get party where party id
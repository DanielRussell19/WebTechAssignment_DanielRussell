
//Daniel Russell
//external javascript for the purpose of retieving relevant constituency and MSP data

//self invoking function, made to load all relevant data about a constituency and elect MSP
$(function() 
{
    //local variables for function 
    var personRequest = "https://data.parliament.scot/api/members/";
    var partyRequest = "https://data.parliament.scot/api/parties/";
    var postcodeRequest = "https://api.postcodes.io/scotland/postcodes/";
    var submitPostcode = document.URL;

    var conCode;
    var conId;
    var partyId;
    var personId;

    //take user input postcode from url as it is a get request
    submitPostcode = submitPostcode.substr(submitPostcode.indexOf("=") +1,submitPostcode.length);

    //checks if space is present is postcode
    //if so postcode is split into two and joined again to form a complete postcode with no spaces
    //else no changes are made
    //before postcode is concatinated with postcode request
    if(submitPostcode.includes("+"))
    {
        a = submitPostcode.slice(0,submitPostcode.indexOf("+"));
        b = submitPostcode.slice(submitPostcode.indexOf("+")+1,submitPostcode.length);
        submitPostcode = a+b;

        postcodeRequest = postcodeRequest + submitPostcode;
    }
    else
    {
        postcodeRequest = postcodeRequest + submitPostcode;
    }

    //gets constituency code by using json recived from postcode request
    //displays constituency name
    $.ajax({

        url: postcodeRequest,
        type: "get",
        dataType: "json",
        timeout: 2000,
        success: function(data) 
        {
            x = data.result;
            conCode = data.result.codes["scottish_parliamentary_constituency"];
            document.getElementById("ConName").innerHTML = x["scottish_parliamentary_constituency"];
            console.log(conCode);
        },
        error: function()
        {
            window.location.href = "./Home.html#ErrorMessage";
        }
                    
    });

    //searches for constituency id from parliament.scot by matching it with the constituency code retrived above
    $.ajax({

        url: "https://data.parliament.scot/api/constituencies/",
        type: "get",
        dataType: "json",
        timeout: 8000,
        success: function(data) 
        {
            conId = 0;

            $.each(data, function(i,field){
            if(field.ConstituencyCode == conCode)
            {
                conId = field.ID;
                console.log(conId);
            }
            })
        },
        error: function()
        {
            document.getElementById("ConName").innerHTML = "Constituencies Unavailable";
        }
    
    });

    //searches for person id from parliament.scot with matching constituency id
    $.ajax({

        url: "https://data.parliament.scot/api/MemberElectionConstituencyStatuses/",
        type: "get",
        dataType: "json",
        timeout: 5000,
        success: function(data) 
        {
            personId = 0;

            for(x of data){
            if(x.ConstituencyID == conId)
            {
                personId = x.PersonID;
            }
            }

            console.log(personId);
            personRequest = personRequest.concat(personId.toString());

            //scoping issues from personId forced the nessesity for a nested Jquery request
            //since personId is only visible and modifyable within this success function below

            //searches for person record from parlament.scot with matching personId
            //displays name and image
            $.ajax({

            url: personRequest,
            type: "get",
            dataType: "json",
            timeout: 5000,
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
                    document.getElementById("MspImage").innerHTML = "No Image found";
                }
            },
            error: function()
            {
                document.getElementById("MspName").innerHTML = "Member Unavailable";
            }

            });

        },
        error: function()
        {
            document.getElementById("MspName").innerHTML = "Member Constituency Unavailable";
        }

    });

    //Another issue of scope and hoisting justified using a nested Jquery request to use and modify PartyID

    //searches for and get party id that is assoiated with matching personId
    //retrives partyname assoiated with partyid
    //displays party found is assosiation with personid
    $.ajax({

        url: "https://data.parliament.scot/api/memberparties",
        type: "get",
        dataType: "json",
        timeout: 5000,
        success: function(data) 
        {
                partyId = 0;

                for(x of data){
                    if(x.PersonID == personId){
                        partyId = x.PartyID;
                    }
                }

                console.log(partyId);
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
                        document.getElementById("MspParty").innerHTML = "Party Unavailable";
                    }
        
                });

        },
        error: function()
        {
            document.getElementById("MspParty").innerHTML = "MemberParty Unavailable";
        }
    
    });

    //searches parliment.scot for emails addresses that match personId
    //emailtypeid 2 is a constituency email
    //emailtypeid 1 is a work email
    //displays emails found
    $.ajax({

        url: "https://data.parliament.scot/api/emailaddresses",
        type: "get",
        dataType: "json",
        timeout: 8000,
        success: function(data) 
        {

            for(x of data){
                if(x.PersonID == personId && x.Address != "" && x.EmailAddressTypeID == 1)
                {
                    document.getElementById("MspWEmail").innerHTML = "Work Email: " + x.Address;
                }
                
                if(x.PersonID == personId && x.Address != "" && x.EmailAddressTypeID == 2){
                    document.getElementById("MspCEmail").innerHTML = "Constituency Email: " + x.Address;
                }
            }
        },
        error: function()
        {
            document.getElementById("MspWEmail").innerHTML = "Email Unavailable";
            document.getElementById("MspVEmail").innerHTML = "Email Unavailable";
        }

    });

    //As of development parliment.scot API telephones was offline
    //unable to predict Json structure nor recive any data concerning MSP telephone numbers

    //used to search parliament.scot for telephones numbers that match personId
    //displays phonenumber found
    $.ajax({

        url: "https://data.parliament.scot/api/telephones",
        type: "get",
        dataType: "json",
        success: function(data) 
        {
            //console.log(personId);

            //for(x of data){
                //if(x.PersonID == personId){
                    //document.getElementById("MspTele").innerHTML = data.ActualName;
                //}
            //}
        },
        error: function()
        {
            document.getElementById("MspTele").innerHTML = "Telephones Unavailable";
        }

    });

})

            //  Json sources
            //---------------------------------------------------------------------------
            //  https://api.postcodes.io/scotland/postcodes/ get constituncy code where postcode
            //  https://data.parliament.scot/api/constituencies/  S16000122  get ID = 90
            //  https://data.parliament.scot/api/MemberElectionConstituencyStatuses/ where constituencies id = 90 get personid =1848
            //  https://data.parliament.scot/api/members/1848 where personid
            //  https://data.parliament.scot/api/memberparties where personid get party id
            //  https://data.parliament.scot/api/parties/ get party where party id
            //  https://data.parliament.scot/api/emailaddresses get email where personid and emailtype
            //  https://data.parliament.scot/api/telephones get telephone where personid and telephonetype?
$(function() 
{
    var submitPostcode = document.URL;
    
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
    }
    
    $.ajax({

        url: "http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=g50ru",
        type: "get",
        dataType: "json",
        timeout: 8000,
        success: function(data) 
        {
            console.log(data);
            $.each(data, function(i,field){
                console.log(field);
            })
        },
        error: function()
        {
            document.getElementById("ConName").innerHTML = "Constituencies Unavailable";
        }
    
    });
})

//  JSON sources
//  http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=
$(function() 
{
    var JobStateRequest = "http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=";
    
    //take user input postcode from url as it is a get request
    submitPostcode = submitPostcode.substr(submitPostcode.indexOf("=") +1,submitPostcode.length);

    //checks if space is present is postcode
    //if so postcode is split into two and joined again to form a complete postcode with no spaces
    //else no changes are made
    //before postcode is concatinated with postcode request
    if(submitPostcode.includes("+"))
    {
        a = submitPostcode.slice(0,2);
        b = submitPostcode.slice(submitPostcode.indexOf("+")+1,submitPostcode.length);
        submitPostcode = a+b;
    
        JobStateRequest = JobStateRequest + submitPostcode;
    }
    else
    {
        JobStateRequest = JobStateRequest + submitPostcode;
    }

    $.ajax({

        url: JobStateRequest,
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
            
        }

    });
})

//  JSON sources
//  http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=

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

    var request = "http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=" + submitPostcode;
    
    $.ajax({

        url: request,
        type: "get",
        dataType: "json",
        timeout: 2000,
        success: function(data) 
        {
            var selectionbox = document.getElementById("dropboxJobs");
            var i = 0;

            console.log(data);

            for(x of data.jobsBreakdown){
                job = document.createElement("option");

                job.text = data.jobsBreakdown[i].description;
                job.id = data.jobsBreakdown[i].socGroup+1;
                job.value = (data.jobsBreakdown[i].percentage).toFixed(2);
                
                selectionbox.add(job);
                i++;
            }
        },
        error: function()
        {
            window.location.href = "./Home.html#ErrorMessage";
        }
    
    });

})

function updateValues()
{
    var selectionbox = document.getElementById("dropboxJobs");

    var label1 = document.getElementById("labelSalary");
    var label2 = document.getElementById("changeSalary");
    var br1 = document.getElementById("brchangeSalary");
    var br2 = document.getElementById("brSalary");

    var selectId = selectionbox.options[selectionbox.selectedIndex].value;
    var selectName = selectionbox.options[selectionbox.selectedIndex].text;

    if(label1 != null && label2 !=null){
        label1.remove();
        label2.remove();
        br1.remove();
        br2.remove();
    }

    loadGraph(selectId,selectName);
    
    getSoc(selectName);
}

function getSoc(jobName)
{
    var request = "http://api.lmiforall.org.uk/api/v1/soc/search?q=" + jobName

    $.ajax({

        url: request,
        type: "get",
        dataType: "json",
        timeout: 2000,
        success: function(data)
        {
            var temp = 0;
            temp = data[0].soc;
            console.log(data[0].title);

            loadPay(temp);
            loadChangePay(temp);
        },
        error: function()
        {
            txt = document.createElement("p");
            txt.id = "labelSalary";
            txt.innerHTML = " Error: Could not find job Soc Code";
        }

    });

}

function loadGraph(value,description){

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        [description, (value/100)],
        ['Other', ((100-value)/100)],
      ]);
        
    var options = {
        title: 'Number of workers in sector ' + description,
        is3D: true,
        width: 400,
        height: 400,
        colors: ['#006622', '#a3a3c2']
    };

      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('PieChart3d'));
      chart.draw(data, options);
    }    

}

function loadPay(soc){
    var request = "http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=" + soc;

    $.ajax({

        url: request,
        type: "get",
        dataType: "json",
        timeout: 2000,
        success: function(data) 
        {
            var txtlbl = document.getElementById("selectionDetails");
            var temp = 0;
            
            temp = data.series[0].estpay;

            txt = document.createElement("p");
            
            txt.id = "labelSalary";
            txt.innerHTML = " Salary: $ " + temp;

            txtlbl.append(txt);

            br = document.createElement("br");
            br.id = "brSalary";
            txtlbl.append(br);
        },
        error: function()
        {
            txt = document.createElement("p");
            txt.id = "labelSalary";
            txt.innerHTML = " Error: Can not load salary";
            txtlbl.append(txt);
        }
    
    });
}

function loadChangePay(soc){
    var request = "http://api.lmiforall.org.uk/api/v1/ashe/annualChanges?soc="+soc;
    
    $.ajax({

        url: request,
        type: "get",
        dataType: "json",
        timeout: 8000,
        success: function(data) 
        {
            var i = 0;
            var txtlbl = document.getElementById("selectionDetails");
            var temp = 0;

            for(x of data.annual_changes)
            {
                temp = x.change;
                i++;
            }

            if(temp >0)
            {
                txt = document.createElement("p");
                txt.id = "changeSalary";
                txt.innerHTML = " Change in salary: $ +" + temp;
                txtlbl.append(txt);

                br = document.createElement("br");
                br.id = "brchangeSalary";
                txtlbl.append(br);
            }
            else
            {
                txt = document.createElement("p");
                txt.id = "changeSalary";
                txt.innerHTML = " Change in salary: $ " + temp;
                txtlbl.append(txt);

                br = document.createElement("br");
                br.id = "brchangeSalary";
                txtlbl.append(br);
            }

            txtlbl.append(txt);
        },
        error: function()
        {
            txt = document.createElement("p");
            txt.id = "changeSalary";
            txt.innerHTML = " Error: Can not load change in salary";
        }
    
    });
}

//  JSON sources
//  http://api.lmiforall.org.uk/api/v1/census/jobs_breakdown?area=
//  http://api.lmiforall.org.uk/api/v1/soc/code/ 231 +1?
//  http://api.lmiforall.org.uk/api/v1/ashe/estimatePay?soc=
//  http://api.lmiforall.org.uk/api/v1/ashe/annualChanges?soc=

//  Graph API
//  https://developers.google.com/chart
send_appl_status = function(id)
{ 
	var input = '{"data" :[{"date_id":"'+id+'"}]}';
	var test = 0;
	//alert(id)
	document.getElementById("check_click").onclick=''
	$.ajax
	(
		{
			type:"POST",
			url:"../../test_js_get_appl/",
			async:false,
			data: 
   				{
        			vol_name: input // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				obj_array = obj["data"]
				//alert(obj_array[0])
				test = obj_array.length
				//alert(test)
        		
    		},
    		error: function(data)
    		{
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	var array = []
	var stat = '1'
	for(i=0;i<test;i++)
	{
		if(document.getElementById("appl_status"+i).checked)
		{
			stat = '1'
		}
		else
		{
			stat = '0'
		}
		var k = '{"applicant_id":"'+document.getElementById("appl_print"+i).innerText+'", "acceptance_packet":"'+stat+'", "rejected_reason":"'+document.getElementById("comments"+i).innerText+'", "application_status":"'+document.getElementById("completed_appl"+i).innerText+'"}'
		array.push(k)
	}
	input1 = '{"data":['+array+'], "status":"'+id+'"}'
	$.ajax
	(
		{
			type:"POST",
			url:"../../application_status_send/",
			async:false,
			data: 
   				{
        			vol_name: input1 // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				alert(obj["message"])
				location.reload()
        		
    		},
    		error: function(data)
    		{
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);
	
	
	
}

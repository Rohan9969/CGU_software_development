getTest3 = function(id)
{ //alert(id)
	var input = '{"data" :[{"date_id":"'+id+'"}]}';
	document.getElementById("cancel_click").onclick=''
	$.ajax
	(
		{
			type:"POST",
			url:"../../test_js_get_appl/",
			async:true,
			data: 
   				{
        			vol_name: input // from form
        		},
    		dataType: "text",
    		success: function(data) 
    		{
				var obj = $.parseJSON(data)
				obj_array = obj["data"]
				for(i=0;i<obj_array.length;i++)
				{
					if(obj_array[i]["acceptance_packet"]=='1')
					{
						check = 'SENT'
					}
					else
					{
						check = 'NOT SENT'
					}
					if(obj_array[i]["application_status"]=='1')
					{
						check_stat = 'ACCEPTED'
					}
					else if(obj_array[i]["application_status"]=='2'){
						check_stat = 'CANCELLED'
					}
					else
					{
						check_stat = 'REJECTED'
					}
					
				var html = '<tr>';
				html += '<td id="appl'+i+'">'+obj_array[i]["applicant_id"]+'</td>'
				html += '<td id="firstname'+i+'">'+obj_array[i]["applicant_first_name"]+'</td>'
				html += '<td id="lastname'+i+'">'+obj_array[i]["applicant_last_name"]+'</td>'
				html += '<td id="completed_appl'+i+'">'+check_stat+'</td>'
				html += '<td id="appl_status_cancel'+i+'" align="center">'+check+'</td>'
				html += '<td align="center"><input id="cancel'+i+'" type="checkbox" name="appl_status" '+check+'></td>'
				
				html += '</tr>'
				$("#cancel_status").append(html);
				}
        		
    		},
    		error: function(data)
    		{
        		debugger;
        		alert("Sorry for the inconvinience. Server is not working. check if the server is working.");
      		}
    	}
  	);	
	
}

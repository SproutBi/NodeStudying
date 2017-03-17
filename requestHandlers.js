var exec = require("child_process").exec;

function doMehord1(response)
{
	console.log("Request handler 'doMehord1' was called.");
	

	/*var content ="empty";
	exec(sleep(5000),function(){    
		content = "10000";  
		response.writeHead(200,{"Content-Type":"text/plain"});    
		response.write(content);   
		response.end();
	});*/

	sleep(5000)
	response.writeHead(200,{"Content-Type":"text/plain"});    
	response.write(content);   
	response.end();

	function sleep(milliSeconds){    
		var startTime =new Date().getTime();    
		while(new Date().getTime()< startTime + milliSeconds);  
	}  
	
}

function upload(response)
{
	console.log("Request handler 'upload' was called.");
	response.writeHead(200,{"Content-Type":"text/plain"});    
	response.write("upload");   
	response.end();
}

exports.doMehord1 = doMehord1;
exports.upload = upload;
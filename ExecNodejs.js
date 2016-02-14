var exec = require('child_process').exec;


exports.index = function(req, res){
	console.log('in runR');
		
	//---------------------------------------------------------------------------
	 var child = exec('Rscript ./allDir/read.R', function(error, stdout, stderr) {
		 
	       console.log('stdout: ' + stdout);
	        console.log('stderr: ' + stderr);
	        if (error !== null) {
	            console.log('exec error: ' + error);
	        }
   	
       });
	 console.log('exiting runR');
  res.render('index', { title: 'Express' });
};
var isRunning;
function leftDown(){
	 $("#left-arrow").addClass("pressed");
	
	isRunning = setInterval(function(){
		var panorama = $("#panorama");
		var pic = $("#nightCity");
		
		var bgX = parseInt(panorama.css("background-position-x"));
		var imgX = parseInt(pic.css("left"));
		
		if (imgX <= 0){
			panorama.css("background-position-x", bgX+1);
			pic.css("left", imgX+1);
		}
	}, 10);
}

function leftUp(){
	$("#left-arrow").removeClass("pressed");
	if(isRunning)clearInterval(isRunning);
}

function rightDown(){
	 $("#right-arrow").addClass("pressed");
	
	isRunning = setInterval(function(){
		var panorama = $("#panorama");
		var pic = $("#nightCity");
		
		var bgX = parseInt(panorama.css("background-position-x"));
		var imgX = parseInt(pic.css("left"));
		
		console.debug(imgX);
		if (imgX >= -1581){
			panorama.css("background-position-x", bgX-1);
			pic.css("left", imgX-1);	
		}
	}, 10);
}

function rightUp(){
	$("#right-arrow").removeClass("pressed");
	if(isRunning)clearInterval(isRunning);
}

$(document).ready(function(){
	var panorama = $("#panorama");
	var pic = $("#nightCity");
	
	pic.mousemove(function(e){
		var xPos = e.offsetX - 450;	
		pic.css("-webkit-mask-position", xPos + " 0");
	});
	
	var leftArr = $("#left-arrow");
	
	leftArr.mousedown(function(e){
		e.stopPropagation();
		leftDown();
	});
	
	leftArr.mouseup(function(e){
		leftUp()
	});
	
	
	var rightArr = $("#right-arrow");
	
	rightArr.mousedown(function(e){
		rightDown();
	
	});
	
	rightArr.mouseup(function(e){
		rightUp()
	});
	
	$("a#aboutAnchor").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'padding' : 100,
		'width' : 500,
		'height': 500,
		'overlayShow': true
	});
	
	$("#aboutAnchor").mousedown(function(e){
		$("#aboutAnchor").addClass("pressed");
	});
	
	$("#aboutAnchor").mouseup(function(e){
		$("#aboutAnchor").removeClass("pressed");
	});
});
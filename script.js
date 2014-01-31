$(document).ready(function() {

	$('#splashScreen').click(function() {
		$('#splashScreen').fadeOut("slow", function() {
			$('#splashScreen').remove();
			$("body").prepend("<img src=\""+IMAGE_DIRECTORY+"/hero.png\" id=\"hero\">");
		});
	});

	var heroX = 3;
	var heroY = 3;

	var IMAGE_DIRECTORY = "images";
	var GRASS = "grass.jpg";
	var GRASS2 = "grass2.jpg";
	var FOREST = "forest.jpg";
	var FOREST2 = "forest2.jpg";
	var HILLS = "hills.jpg";
	var HILLS2 = "hills2.jpg";
	var MOUNTAINS = "mountains.jpg";
	var MOUNTAINS2 = "mountains2.jpg";
	var SNOWMOUNTAINS = "snowmountains.jpg";
	var LAKE_S = "lakeS.jpg";
	var LAKE_M = "lakeM.jpg";
	var LAKE_L = "lakeL.jpg";
	var CASTLE1 = "castle.jpg";
	var CASTLE2 = "castle2towers.jpg";
	var TERRAIN_ARRAY = [GRASS, GRASS2,
						FOREST, FOREST2, 
						HILLS, HILLS2, 
						MOUNTAINS, MOUNTAINS2, 
						SNOWMOUNTAINS, 
						LAKE_S, LAKE_M, LAKE_L, 
						CASTLE1, CASTLE2];

	var MAP_SIZE = 8;
	
	// story text max 270 characters

	for (var i = 0; i < MAP_SIZE; i++) {
		$("#map").append("<div class=\"row\">")
		for (var j = 0; j < MAP_SIZE; j++) {
			$("#map").append("<img src=\""+IMAGE_DIRECTORY+"/grass.jpg\" class=\"cell\">");
		};
		$("#map").append("</div>");
	};

	$("#up_arrow").click(function() {
		$("#hero").animate({top:"-=32"}, 500);
	});
	$("#down_arrow").click(function() {
		$("#hero").animate({top:"+=32"}, 500);
	});
	$("#left_arrow").click(function() {
		$("#hero").animate({left:"-=32"}, 500);
	});
	$("#right_arrow").click(function() {
		$("#hero").animate({left:"+=32"}, 500);
	});
});
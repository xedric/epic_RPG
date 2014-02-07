$(document).ready(function() {

	$('#splashScreen').click(function() {
		$('#splashScreen').fadeOut("slow", function() {
			$('#splashScreen').remove();
			$("body").prepend("<img src=\""+IMAGE_DIRECTORY+"/hero.png\" id=\"hero\">");
		});
	});

	var heroX = 0;
	var heroY = 0;
	var MAX_HERO_X = 7;
	var MAX_HERO_Y = 7;
	var MIN_HERO_X = 0;
	var MIN_HERO_Y = 0;

	var IMAGE_DIRECTORY = "images";
	
	var MAP_SIZE = 8;
	var TILE_SIDE = 32;
	
	// story text max 270 characters

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

	var oneCastle1 		= 0;
	var oneCastle2 		= 0;
	var oneSnowMountain = 0;
	var oneLakeS		= 0;
	var oneLakeM		= 0;
	var oneLakeL		= 0;

	var map = [];
	for (var i = 0; i < MAP_SIZE; i++) {
		map.push(new Array(MAP_SIZE));
		for (var j = 0; j < MAP_SIZE; j++) {
			var r = Math.floor(Math.random()*(TERRAIN_ARRAY.length - 1));
			map[i][j] = TERRAIN_ARRAY[r];
		};
	};

	for (var i = 0; i < MAP_SIZE; i++) {
		$("#map").append("<div class=\"row\">")
		for (var j = 0; j < MAP_SIZE; j++) {
			$("#map").append("<img src=\""+IMAGE_DIRECTORY+"/"+map[i][j]+"\" class=\"cell\">");
		};
		$("#map").append("</div>");
	};

	$("#up_arrow").click(function() {
		if(heroY != MIN_HERO_Y) {
			$("#hero").animate({top:"-="+TILE_SIDE}, 500);
			heroY--;
		}
	});
	$("#down_arrow").click(function() {
		if(heroY != MAX_HERO_Y) {
			$("#hero").animate({top:"+="+TILE_SIDE}, 500);
			heroY++;
		}
	});
	$("#left_arrow").click(function() {
		if(heroX != MIN_HERO_X) {
			$("#hero").animate({left:"-="+TILE_SIDE}, 500);
			heroX--;
		}
	});
	$("#right_arrow").click(function() {
		if(heroX != MAX_HERO_X) {
			$("#hero").animate({left:"+="+TILE_SIDE}, 500);
			heroX++;
		}
	});
});
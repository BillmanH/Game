
var char_tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden")
	.html("player character<br>other info<br>other info");
	
var player_character = canvas.append("circle")
							.attr("cx", char_x)
							.attr("cy", char_y)
							.attr("r", 5)
							.on("mouseover", function(){return char_tooltip.style("visibility", "visible");})
							.on("mousemove", function(){return char_tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
							.on("mouseout", function(){return char_tooltip.style("visibility", "hidden");});
	

	
	
player_character.moveUp = function(y){
	char_y = char_y - y
	this.transition()
		.attr("cy", char_y)	
}

player_character.moveDown = function(y){
	char_y = char_y + y
	this.transition()
		.attr("cy", char_y)	
}

player_character.moveLeft = function(x){
	char_x = char_x - x
	this.transition()
		.attr("cx", char_x)	
}

player_character.moveRight = function(x){
	char_x = char_x + x
	this.transition()
		.attr("cx", char_x)	
}


							

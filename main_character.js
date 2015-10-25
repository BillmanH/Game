var player_character = canvas.append("circle")
							.attr("cx", char_x)
							.attr("cy", char_y)
							.attr("r", 20);

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
							

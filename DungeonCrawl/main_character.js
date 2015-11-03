
var char_tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden")
	.html("player character<br>other info<br>other info");

var player_character = canvas.append("circle")
							.attr({"cx": char_x,
									"cy": char_y,
									"r": 5})
							.on("mouseover", function(){return char_tooltip.style("visibility", "visible");})
							.on("mousemove", function(){return char_tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
							.on("mouseout", function(){return char_tooltip.style("visibility", "hidden");})

var player_inventory_window = canvas.append("rect")
							.attr({"x":10,
								"y":10,
								"width": 10,
                             	"height": 100,
								"stroke-width":3,
								"stroke":"rgb(0,0,0)",
								"fill":"white"});
player_inventory_window.isOpen = false;


//MOVEMENT
player_character.moveUp = function(speed){
	char_y = char_y - speed
	this.transition().attr("cy", char_y)}

player_character.moveUpLeft = function(speed){
	char_y = char_y - speed
	char_x = char_x - speed
	this.transition().attr("cy", char_y).attr("cx", char_x)}

player_character.moveUpRight = function(speed){
	char_y = char_y - speed
	char_x = char_x + speed
	this.transition().attr("cy", char_y).attr("cx", char_x)}

player_character.moveDown = function(speed){
	char_y = char_y + speed
	this.transition().attr("cy", char_y)}

player_character.moveDownLeft = function(speed){
	char_y = char_y + speed
	char_x = char_x - speed
	this.transition().attr("cy", char_y).attr("cx", char_x)}

player_character.moveDownRight = function(speed){
	char_y = char_y + speed
	char_x = char_x + speed
	this.transition().attr("cy", char_y).attr("cx", char_x)}

player_character.moveLeft = function(speed){
	char_x = char_x - speed
	this.transition().attr("cx", char_x)}

player_character.moveRight = function(speed){
	char_x = char_x + speed
	this.transition().attr("cx", char_x)}

//INVENTORY
open_inventory = function(){
	player_inventory_window.transition()
		.attr({"width": 300,
				"height":580});
	player_inventory_window.isOpen = true}

close_inventory = function(){
	player_inventory_window.transition()
		.attr({"width": 10,
				"height":100})
	player_inventory_window.isOpen = false;}


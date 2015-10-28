

function get_random_screen_position(max,num){
	var l_marg = 10,
		u_marg = max-10,
		nums = [];
	for(var i=0;i<=num;i++){
		do {
			tmp = Math.floor(Math.random() * max)
		} while (tmp > u_marg && tmp < l_marg);
		nums.push(tmp)
	}
	return nums;
}	

var num_zombies = 10;
var zombie_x =get_random_screen_position(width,num_zombies);
var zombie_y = get_random_screen_position(height,num_zombies);
zombie_data = []
for(var i=0;i<=num_zombies;i++){
	item = {};
	item["name"]="zombie";
	item["x"] = zombie_x[i];
	item["y"] = zombie_y[i];
	zombie_data.push(item);
}
console.log(zombie_data);
// ;return d["y"]

var zombie_tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden");
	
var zombies = canvas.selectAll("circle")
					.data(zombie_data)
					.enter()
						.append("circle")   
						.attr("r",5)
						.attr("cy", function(d){return d["y"]})
						.attr("cx", function(d){return d["x"]})
						.style("fill", "rgb(255,0,0)")
						.on("mouseover", function(d){return zombie_tooltip.style("visibility", "visible")
																		.html("creature: " + d["name"] + "<br>y: " + d["y"] + "<br>x: " + d["x"]);})
						.on("mousemove", function(){return zombie_tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
						.on("mouseout", function(){return zombie_tooltip.style("visibility", "hidden");})
					
	

function wander(d){
	var creature = d3.select(this);
	(function repeat(d){
		direction = Math.floor(Math.random() * 4 + 1)
		if (direction==1){creature.transition().attr("cx", d["x"] + 5).each("end",repeat)}
		if (direction==2){creature.transition().attr("cx", d["x"] - 5).each("end",repeat)}
		if (direction==3){creature.transition().attr("cx", d["y"] + 5).each("end",repeat)}
		if (direction==4){creature.transition().attr("cx", d["y"] - 5).each("end",repeat)}
		console.log(direction);
	})

}
	
	
d3.selectAll(zombies).data(zombie_data).each(wander())
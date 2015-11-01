

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

function get_random_movement(max){
	var l_marg = 0,
		u_marg = max-10,
		tmp = Math.floor(Math.random() * max - Math.floor(Math.random() * max))
	return tmp;
}	

var num_zombies = 100;
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
console.log(zombie_data)

var zombie_tooltip = d3.select("body")
	.append("div")
	.style("position", "absolute")
	.style("z-index", "10")
	.style("visibility", "hidden");
	
var zombies = canvas.selectAll("circle.zombie")
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


console.log(get_random_movement(5))
zombies.transition().each(wander);


function wander() {
  var circle = d3.select(this);
  (function repeat() {
    circle = circle.transition()
		.attr("cx", function(d){if (circle["cx"] < 5){return 5} else {return circle["cx"]+get_random_movement(5)}})
        .attr("cy", function(d){if (circle["cy"] < 5){return 5} else {return circle["cy"]+get_random_movement(5)}})
        .each("end", repeat);
  })();
}


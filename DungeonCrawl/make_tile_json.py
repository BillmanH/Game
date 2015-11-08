import pandas as pd
import numpy as np
import json

#step one: defining matrix values
screen_height = 1200
screen_width = 600

size_of_tile = 20
aspect = [(screen_width/size_of_tile),(screen_height/size_of_tile)] #y:height / x:width

resource_folder = "https://s3-us-west-2.amazonaws.com/williamjeffreyharding.com/Assets/gameTextures/{}"
local_folder = "C:\Users\WilliamLaptop\Documents\GitHub\Game\DungeonCrawl\{}"
y_values = [screen_height-(screen_height-(screen_height/aspect[0]*x)) for x in range(aspect[0])]
x_values = [screen_width-(screen_width-(screen_width/aspect[1]*x)) for x in range(aspect[1])]
world_matrix =[[(x,y) for x in y_values] for y in x_values]

map_grid = []
for row in world_matrix:
	for tile in row:
		map_grid.append({"x":tile[0],
						"y":tile[1],
						"width":size_of_tile,
						"height":size_of_tile,
						"xlink:href":resource_folder.format("grass_1.jpg")})
						


with open(local_folder.format('map.json'), 'w') as fp:
    json.dump(map_grid, fp)
import pandas as pd
import numpy as np
import json

#step one: defining matrix values
screen_height = 1200
screen_width = 600

aspect = [30,60] #y:height / x:width

y_values = [screen_height-(screen_height-(screen_height/aspect[0]*x)) for x in range(aspect[0])]
x_values = [screen_width-(screen_width-(screen_width/aspect[1]*x)) for x in range(aspect[1])]
world_matrix =[[(x,y) for x in y_values] for y in x_values]

map_grid = {}
ma
import pandas as pd
import numpy as np
import json

#step one: defining matrix values
screen_lenght = 1200
screen_width = 600

aspect = [50,25] #this is the number of cells that you want to have on the screen

x_values = [screen_lenght-(screen_lenght-(screen_lenght/aspect[0]*x)) for x in range(aspect[0])]
y_values = [screen_width-(screen_width-(screen_width/aspect[1]*x)) for x in range(aspect[1])]
world_matrix =[[[x,y] for x in x_values] for y in y_values]

```python

import holoviews as hv
from holoviews import opts
import pandas as pd
import numpy as np
hv.extension('bokeh')

# Sample matrix representing the export volumes between 5 countries

labels = ['St. Louis County', 'St. Louis City', 'Franklin County', 'Jefferson County', 'St. Charles', 'Madison County', 
          'St.Clairs County','Monroe County']


# Creating a pandas DataFrame
df = pd.DataFrame(export_data, index=labels, columns=labels)
df = df.stack().reset_index()

df.columns = ['source', 'target', 'value']

# Creating a Chord object
chord = hv.Chord(df)

# Styling the Chord diagram
chord.opts(
    opts.Chord(
        cmap='Category20', edge_cmap='Category20', 
        labels='source', label_text_font_size='10pt',  
        edge_color='source', node_color='index', 
        width=700, height=700 
    )
).select(value=(5, None)) 

# Display the plot
chord
```
"Visualization with chord diagram for traffic movement. <br/><img src='/images/Traffic_chord.png'>"

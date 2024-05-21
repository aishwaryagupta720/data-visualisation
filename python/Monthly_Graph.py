import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import re

# Load your data - replace with the actual data
data = pd.read_csv('assign1_wastedata1.csv')
# Convert 'Date' to datetime and format as 'Month-Year'
data['Date'] = pd.to_datetime(data['Date']).dt.strftime('%Y-%m')
# Convert " x in y" to "Misplaced in y" in the 'Stream' column
# Replace "Food waste in Compost" with "Compost"
data['Stream'] = data['Stream'].replace({'Food waste in Compost': 'Compost'})
data['Stream'] = data['Stream'].apply(lambda x: re.sub(r'(.+) in (.+)', r'Misplaced in \2', x) if ' in ' in x else x)
# Now 'Date' is 'Month', which can be used directly
data.rename(columns={'Date': 'Month'}, inplace=True)
# Filter for Swig and Graham buildings
data = data[data['Building'].isin(['Swig', 'Graham'])]

# Replace "Food waste in Compost" with "Compost"
data['Stream'] = data['Stream'].replace({'Food waste in Compost': 'Compost'})

# Define the set of streams and the buildings
streams = ['Recycling', 'Compost', 'Landfill']
# Determine the categories and buildings you want to plot
Misplaced_categories = [f'Misplaced in {cat}' for cat in streams]
buildings = ['Graham', 'Swig']

# Define colors for each stream for better visualization
colors = {
    'Compost': '#006837',  # Olive Drab
    'Recycling': '#1c43ba',  # Dodger Blue
    'Landfill': '#808080',  # Gray
    'Misplaced in Recycling': 'lightblue',
    'Misplaced in Compost': '#aadb9a',
    'Misplaced in Landfill': 'lightgrey'
}

# Define a function to create the plot
def create_plot(building_data, building_name):
    # Group the data by 'Month' and 'Stream' and sum the weights
    monthly_data = building_data.groupby(['Month', 'Stream'])['Weight'].sum().unstack(fill_value=0)
    print(monthly_data)
    # Sort the months for proper sequential plotting
    # monthly_data = monthly_data.reindex(pd.to_datetime(monthly_data.index).sort_values())
    print(monthly_data)
    # Initialize the plot
    fig, ax = plt.subplots(figsize=(10, 5))
    
    # Get the list of months
    months = monthly_data.index
    x = np.arange(len(months))
    
    # Plotting
    width = 0.25  # Width of the bars
    for i, category in enumerate(streams):
        bar_positions = x - (width * len(streams) / 4) + (i * width)
        ax.bar(bar_positions, monthly_data[category], width=width, label=category, color=colors[category])


        Misplaced_category = f'Misplaced in {category}'
        # Stack Misplaced waste if present
        if Misplaced_category in monthly_data.columns:
            ax.bar(bar_positions, monthly_data[Misplaced_category], width=width,
                   bottom=monthly_data[category], label=Misplaced_category, color=colors[Misplaced_category])
            
    monthly_totals = monthly_data.sum()

    # Formatting the plot
    ax.set_xlabel('Year/Month')
    ax.set_ylabel('Weight in Pounds')
    ax.set_title(f'Waste Weights by Category and Misplacement for {building_name}')
    ax.set_xticks(x)
    ax.set_xticklabels(months, rotation=45)
    ax.legend(loc='upper left')

    ax.patch.set_facecolor('none')  # Sets the background of the axes (the plot area) to be transparent

# ... your code to create the bar chart ...

    # Optionally save the figure with a transparent background
    plt.savefig(f'{building_name}.png', transparent=True)
    # Show plot
    plt.tight_layout()
    plt.show()

# Generate the plot for each building
for building in buildings:
    building_data = data[data['Building'] == building]
    create_plot(building_data, building)
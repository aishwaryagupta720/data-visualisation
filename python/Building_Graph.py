import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
data_path = '/path/to/your/data.csv'
data = pd.read_csv(data_path)

# Transformation function for the "Stream" column
def transform_stream(value):
    if " in " in value:
        parts = value.split(" in ")
        return "Misplaced in " + parts[1]
    return value

# Apply the transformation
data['Stream'] = data['Stream'].apply(transform_stream)

# Group and sum weights by building and stream
grouped_data = data.groupby(['Building', 'Stream'])['Weight'].sum().unstack(fill_value=0)

# Stream order and color mapping
ordered_streams = ['Recycling', 'Misplaced in Recycling', 'Compost', 'Misplaced in Compost', 'Landfill', 'Misplaced in Landfill']
colors = {
    'Compost': '#006837',
    'Recycling': '#1c43ba',
    'Landfill': '#808080',
    'Misplaced in Recycling': 'lightblue',
    'Misplaced in Compost': '#aadb9a',
    'Misplaced in Landfill': 'lightgrey'
}

# Student counts
student_counts = {
    'Swig': 400,
    'Graham': 384,
    'Campisi': 200,
    'McWalsh': 250,
    'Dunne': 280
}

# Calculate weight per student
weight_per_student_data = grouped_data.copy()
for building in weight_per_student_data.index:
    weight_per_student_data.loc[building] = weight_per_student_data.loc[building] / student_counts[building]

# Create a stacked bar chart
fig, ax = plt.subplots(figsize=(14, 8))
width = 0.25
positions = range(len(weight_per_student_data))

for stream, color in colors.items():
    bottoms = weight_per_student_data[ordered_streams[:ordered_streams.index(stream)]].sum(axis=1)
    ax.bar(positions, weight_per_student_data[stream], width, bottom=bottoms, label=stream, color=color)

ax.set_xlabel('Buildings')
ax.set_ylabel('Weight per Student')
ax.set_title('Weight per Student by Stream and Building')
ax.set_xticks(positions)
ax.set_xticklabels(weight_per_student_data.index)
ax.legend()

plt.xticks(rotation=45)
plt.tight_layout()

# Save the figure with a transparent background
plt.savefig('/path/to/save/graph.png', transparent=True)
plt.show()

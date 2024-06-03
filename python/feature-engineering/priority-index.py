import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

def categorize_age(age):
    if age <= 12:
        return 2  # higher priority for children
    elif age <= 50:
        return 1  # standard priority for adults
    else:
        return 0  # lower priority for seniors due to potential mobility issues

# Load your dataset
df = pd.read_csv('titanic.csv')

# Convert 'Pclass' to integer and map 'Sex' to numeric
df['Pclass'] = df['Pclass'].astype(int)
df['Sex'] = df['Sex'].map({'female': 1, 'male': 0})
df['Age_Category'] = df['Age'].apply(categorize_age)
# Create the 'Priority Index' feature
df['Priority_Index'] = 2 * df['Sex'] + (4 - df['Pclass']) + df['Age_Category']

# Visualize the new feature's effect on survival
# sns.barplot(x='Priority_Index', y='Survived', data=df)
# plt.title('Survival Rates by Enhanced Priority Index')
# plt.xlabel('Enhanced Priority Index')
# plt.ylabel('Survival Rate')
# plt.show()


# Density Plot
# sns.histplot(data=df, x='Priority_Index', kde=True)
# plt.title('Distribution of Enhanced Priority Index')
# plt.xlabel('Enhanced Priority Index')
# plt.ylabel('Frequency')
# plt.show()

# boxplot
# sns.boxplot(x='Survived', y='Priority_Index', data=df)
# plt.title('Enhanced Priority Index vs. Survival')
# plt.xlabel('Survived')
# plt.ylabel('Enhanced Priority Index')
# plt.show()

# correlation heatmap matrix
# correlation_matrix = df[['Priority_Index', 'Age', 'Fare', 'Survived']].corr()
# sns.heatmap(correlation_matrix, annot=True)
# plt.title('Correlation Matrix')
# plt.show()

# violin Plot
# Set the aesthetic style of the plots
sns.set_theme(style="whitegrid")

# Load your dataset
data = df  # Assuming df is your DataFrame and it's already loaded

# Create the violin plot
plt.figure(figsize=(10, 6))
ax = sns.violinplot(x='Survived', y='Priority_Index', data=data,
                    inner='quartile',  # Show quartiles within the violin
                    palette='muted')  # Color palette can be changed as needed

# Overlay individual data points
sns.swarmplot(x='Survived', y='Priority_Index', data=data, color='k', alpha=0.5, size=3)

# Customize the axes and labels
ax.set_title('Enhanced Priority Index vs. Survival', fontsize=16, fontweight='bold')
ax.set_xlabel('Survived', fontsize=14)
ax.set_ylabel('Enhanced Priority Index', fontsize=14)

# Improve tick visibility
ax.tick_params(axis='both', which='major', labelsize=12)

# Annotate median and quartiles
medians = data.groupby(['Survived'])['Priority_Index'].median().values
quartiles = data.groupby(['Survived'])['Priority_Index'].quantile([0.25, 0.75]).unstack().values

for i, survived in enumerate(data['Survived'].unique()):
    median_val = medians[i]
    quartile_val = quartiles[i]
    plt.text(i, median_val, f'Median: {median_val:.2f}', horizontalalignment='center', size='medium', color='black', weight='semibold')
    plt.text(i, quartile_val[0], f'Q1: {quartile_val[0]:.2f}', horizontalalignment='center', size='small', color='black')
    plt.text(i, quartile_val[1], f'Q3: {quartile_val[1]:.2f}', horizontalalignment='center', size='small', color='black')

# Show the plot
plt.show()

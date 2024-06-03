import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('titanic.csv')

# Handling missing data
df['Fare'].fillna(df['Fare'].median(), inplace=True)
df['Cabin'] = df['Cabin'].apply(lambda x: 1 if pd.notna(x) else 0)
df['Pclass'].fillna(df['Pclass'].mode()[0], inplace=True)

# Create the Wealth Status feature
df['Wealth_Status'] = df['Fare'] / df['Fare'].max() + df['Cabin'] + (4 - df['Pclass'])

# Normalize Wealth Status if necessary
df['Wealth_Status'] = (df['Wealth_Status'] - df['Wealth_Status'].min()) / (df['Wealth_Status'].max() - df['Wealth_Status'].min())

# Visualizing the distribution of the Wealth Status feature
sns.histplot(df['Wealth_Status'], kde=True)
plt.title('Distribution of Wealth Status')
plt.xlabel('Wealth Status')
plt.show()

# Analyzing the correlation with survival
sns.boxplot(x='Survived', y='Wealth_Status', data=df)
plt.title('Wealth Status vs. Survival')
plt.show()
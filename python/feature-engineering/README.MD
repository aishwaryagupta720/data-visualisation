# Titanic Data Feature Engineering

## Author
**Name:** Aishwarya Gupta  

## Introduction
This README documents the process of feature engineering and extraction performed on the Titanic dataset. The goal is to develop a model that predicts survival rates based on various passenger characteristics.

## Feature Engineering Steps

### 1. Priority Index
#### Assumptions
- Female passengers had higher survival rates than male passengers due to historical maritime rescue priorities.
- Younger passengers (e.g., children) had higher survival rates due to rescue priorities.
- Passengers in higher classes (i.e., 1st class) had better access to lifeboats and hence higher survival rates.

#### Creating the Priority Index
- Mapped gender to numerical values: female = 1, male = 0.
- Assigned weights to sex and class. Sex weight: 2, Pclass weight: \(4 - Pclass\).
- Computed the Priority Index:
  ```python
  df['Priority_Index'] = 2 * df['Sex'] + (4 - df['Pclass'])
  ```
##### Adding Age Factor
After observing polarizing results in the graph, age was included to refine the index further:
- 0-12 years: 2 (Higher priority)
- 13–50 years: 1 (Standard priority)
- 50 years: 0 (Low Priority)
```python
df['Enhanced_Priority_Index'] = 2 * df['Sex'] + (4 - df['Pclass']) + df['Age_Category']
```
#### Model Assumption
The survival rate increases as the "Enhanced Priority Index" increases, indicating a linear relationship between the index and the probability of survival.

#### Best Suited Visualization for the Enhanced Priority Index
Violin Plot: This plot is chosen as it combines the features of the box plot with a density plot, showing the probability density of the index at different values, split by survival outcome. This effectively illustrates that survivors generally have higher "Enhanced Priority Index" values than non-survivors, with a clear distinction in the median and interquartile ranges between the two groups, suggesting that the index is a good predictor of survival on the Titanic.
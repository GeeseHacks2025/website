import pandas as pd
import matplotlib.pyplot as plt
from sqlalchemy import create_engine

# Connect to the database
engine = create_engine('postgresql://username:password@localhost/dbname')

# Query the data
df = pd.read_sql_query('SELECT * FROM "ChatSession"', engine)

# Calculate average metrics per model
avg_metrics = df.groupby('model').agg({
    'inputTokens': 'mean',
    'outputTokens': 'mean',
    'time': 'mean',
    'cost': 'mean'
}).reset_index()

# Create visualizations
fig, axs = plt.subplots(2, 2, figsize=(12, 10))
fig.suptitle('Model Comparison')

metrics = ['inputTokens', 'outputTokens', 'time', 'cost']
for i, metric in enumerate(metrics):
    ax = axs[i // 2, i % 2]
    ax.bar(avg_metrics['model'], avg_metrics[metric])
    ax.set_title(f'Average {metric}')
    ax.set_xlabel('Model')
    ax.set_ylabel(metric)
    ax.tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.savefig('model_comparison.png')


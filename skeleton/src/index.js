/**
 * ${{ values.serviceName }}
 * ${{ values.description }}
 *
 * Owner: ${{ values.owner }}
 * Scaffolded by Harness IDP Workflows
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({
    service: '${{ values.repoName }}',
    status: 'healthy',
    version: '1.0.0',
  });
});

app.get('/', (req, res) => {
  res.json({
    service: '${{ values.serviceName }}',
    description: '${{ values.description }}',
    owner: '${{ values.owner }}',
  });
});

app.listen(PORT, () => {
  console.log(`${{ values.serviceName }} running on port ${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

// SPA-style fallback (matches the old _redirects/netlify.toml rule: /* -> /index.html 200)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`simpalm-onboarding-portal listening on :${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// index:false - the real app lives at app.html, not index.html (index.html is deliberately the
// GitHub Pages redirect page, kept in this same repo/deploy for GH Pages, and must NOT be what
// this Railway service serves at "/" or express.static would auto-serve it there instead).
app.use(express.static(__dirname, { index: false }));

// SPA-style fallback (matches the old _redirects/netlify.toml rule) - always serves the real app.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`simpalm-onboarding-portal listening on :${PORT}`);
});

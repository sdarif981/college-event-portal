const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Main Homepage
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1>College Event Registration Portal</h1>
        <div style="border: 2px solid #000; display: inline-block; padding: 20px;">
          <h2>System Status: <span style="color: green;">OK</span></h2>
          <p>Launch Day Monitoring Active</p>
        </div>
      </body>
    </html>
  `);
});

// Required Health Endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

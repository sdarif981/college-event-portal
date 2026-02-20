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

// Professional Health Dashboard Endpoint
app.get('/health', (req, res) => {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>System Health | College Event Portal</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0d1117; color: #c9d1d9; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { background: #161b22; border: 1px solid #30363d; border-radius: 12px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); text-align: center; width: 350px; }
            .status-container { margin-bottom: 20px; }
            .pulse { height: 15px; width: 15px; background-color: #238636; border-radius: 50%; display: inline-block; margin-right: 10px; box-shadow: 0 0 8px #238636; animation: pulse-green 2s infinite; }
            @keyframes pulse-green {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(35, 134, 54, 0.7); }
                70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(35, 134, 54, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(35, 134, 54, 0); }
            }
            h1 { color: #58a6ff; font-size: 24px; margin: 0 0 10px 0; }
            .status-text { font-size: 18px; font-weight: 600; color: #3fb950; text-transform: uppercase; letter-spacing: 1px; }
            .meta-info { border-top: 1px solid #30363d; margin-top: 20px; padding-top: 20px; font-size: 14px; color: #8b949e; line-height: 1.6; }
            .badge { background: #21262d; border: 1px solid #30363d; padding: 2px 8px; border-radius: 6px; color: #58a6ff; }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="status-container">
                <span class="pulse"></span>
                <span class="status-text">Operational(OK)</span>
            </div>
            <h1>System Health</h1>
            <div class="meta-info">
                <p>Environment: <span class="badge">Azure-Production</span></p>
                <p>Region: <span class="badge">Central India</span></p>
                <p>Last Checked: <br><strong>${timestamp}</strong></p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #484f58;">&copy; 2026 College Event Portal | DevSecOps</p>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});



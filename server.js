const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CI/CD Assignment</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .container {
          text-align: center;
          padding: 40px;
          max-width: 700px;
        }

        h1 {
          font-size: 48px;
          margin-bottom: 15px;
        }

        p {
          font-size: 20px;
          color: #cbd5e1;
        }

        .status {
          display: inline-block;
          margin-top: 25px;
          padding: 12px 24px;
          border-radius: 8px;
          background: #16a34a;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>CI/CD Pipeline</h1>
        <p>Automated deployment using GitHub Actions and Vercel</p>
        <div class="status">Deployment Successful</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
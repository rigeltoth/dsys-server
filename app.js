const express = require('express');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Status Page</title>
  <style>
    /* Reset some basic styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Main body styles */
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(to top left, #000066 0%, #0000cc 100%); /* Dark background */
      font-family: Arial, sans-serif;
      overflow: hidden;
    }

    /* Button container */
    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(circle, rgba(0, 0, 0, 0.5), #121212);
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      position: relative;
      cursor: pointer;
    }

    /* Glowing border effect */
    .button-container::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      border-radius: 50%;
      background: conic-gradient(
        from 0deg, 
        #6a0dad, #4b0082, #0000ff, #00ced1, #6a0dad
      );
      filter: blur(10px);
      opacity: 0.7;
      animation: rotate 4s linear infinite;
    }

    /* Text styling */
    .button-container .status-text {
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffffff;
      z-index: 1;
      text-align: center;
    }

    /* Rotation animation for the glowing effect */
    @keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
    }
  </style>
</head>
<body>

  <div class="button-container">
    <div class="status-text">Connected</div>
  </div>

</body>
</html>
`

const app = express();

app.get('/', (req, res) => res.send(html));

app.listen(3000, () => console.log('server on port 3000'));

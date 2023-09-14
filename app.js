const express = require('express');
const app = express();
const port = process.env.PORT || 3000; //desired port

//GET endpoint route
app.get('/api', (req, res) => {
  //GET parameters and construct the JSON response
  const slackName = req.query.slack_name || 'excellencyjumo';
  const track = req.query.track || 'backend';
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString().split('.')[0] + 'Z';

  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: 'https://github.com/excellencyjumo/Hosted-Endpoint/blob/main/app.js',
    github_repo_url: 'https://github.com/excellencyjumo/Hosted-Endpoint',
    status_code: 200,
  };

  res.json(jsonResponse);
});

// Starts the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
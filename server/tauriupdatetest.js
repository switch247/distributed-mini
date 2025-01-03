const express = require('express');
const app = express();
const port = 3003;

app.get('/platform/:version', (req, res) => {
  const currentVersion = req.query.version;
  if (currentVersion !== 'v0.2.4') {
    res.json({
      version: 'v0.2.4',
      notes: 'Lepton Games',
      pub_date: '2024-07-08T09:46:12Z',
      platforms: {
        'windows-x86_64': {
          signature: 'dW50cnVzdGVkIGNvbW1lbnQ6IHNpZ25hdHVyZSBmcm9tIHRhdXJpIHNlY3JldCBrZXkKUlVTY2JvVXZMdnFUOVBQTVhtWitha0pQQ1IyZ3BvdTJxaSt1R0FyR3dLSk1uR1dqYmh5V3IzUEY0Y3kzMkZDSGJPWVZzQlFoS0R0UFBhQm1sUXhIakNPLzZRQWZLVXJjQ3dRPQp0cnVzdGVkIGNvbW1lbnQ6IHRpbWVzdGFtcDoxNzIxMTI5OTk0CWZpbGU6bGVwdG9uZ2FtZXNfMC4yLjRfeDY0X2VuLVVTLm1zaS56aXAKd0NYQlZDdmhkNTJVZmlFblk1UmhYT0orVTVkNDNmS0NkcTFxTXR2ZS9aT1gwK3ludFpHQ1dUOTFLMUtmU2Zvd1FIcmNWWmg5VmJic3BXSG9pQ055QlE9PQo=',
          url: 'https://github.com/Leptonlabs/desktop.updater.server/releases/download/v0.2.4/leptongames_0.2.4_x64_en-US.msi.zip'
        }
      }
    });
  } else {
    res.status(204).send();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
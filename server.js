const express = require('express');
const logger = require('morgan');
const multer = require('multer');


const app = express();
app.use(express.static(__dirname));
app.use(logger('dev'));

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploads');
  },

  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });
app.post('/upload', (req, res) => {
  upload.array('files')(req, res, (err) => {
    if (err) {
      console.log('Error :', err);
      res.status(404).end();
    }

    res.status(200).end();
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to: ${port}`);
});

module.exports = app;

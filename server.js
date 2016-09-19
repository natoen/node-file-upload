const express = require('express');
const parser = require('body-parser');
const logger = require('morgan');
const multer = require('multer');


const app = express();
app.use(express.static(__dirname));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
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
app.post('/upload', (req, res, next) => {
  upload.array('upload')(req, res, (err) => {
    if (err) {
      console.log('MULTER ERROR :', err);
    }

    res.end();
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening to: ${port}`);
});

module.exports = app;

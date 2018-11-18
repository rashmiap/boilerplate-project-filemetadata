const multer = require('multer');

const fileFilter = (req, file, cb) => {
    //Supported format = .pdf .docx .doc
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.mimetype === 'application/msword') {
      cb(null, true);
    } else {
      cb(null, false);
    }
}

var storage = multer.memoryStorage();

var upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // we are allowing only 5 MB files
  }
});

module.exports = upload;

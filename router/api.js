const multer = require('multer');

const api = require('express').Router();

api.get('/readdir/:which', require("../middleware/api_readdir_-which"));
api.get('/readfile/:which/:filename', require('../middleware/api_readfile_-which_-filename'));
api.post('/writefile/label', multer().array(), require('../middleware/api_writefile_label'));

module.exports = api

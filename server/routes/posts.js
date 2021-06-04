const getPosts = require('../controllers/posts');

const express = require('express');

const router = express.Router();

router.get('/', getPosts);

module.exports = router;

const PostMessage = require('../models/PostMessage.js');

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createPosts = (req, res) => {
  res.send('create');
};

module.exports = getPosts;

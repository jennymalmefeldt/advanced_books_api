const express = require('express');
const router = express.Router();

/* GET users listing. */
const booksCollection = [
  {
    author: 'Jenny',
    title: "Getting Started with NodeJS"
  },
  {
    author: 'Emma',
    title: "NodeJS for beginners"
  }
]
router.get('/', (req, res, next) => {
  res.json({books: booksCollection});
});

module.exports = router;

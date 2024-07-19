const express = require('express');
const {
  index, create, find, update,
  destroy,
} = require('./controller');

const router = express();

router.post('/categories', create);
router.get('/categories', index);
router.get('/categories/:id', find);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

module.exports = router;

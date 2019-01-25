const express = require('express');

// Handler das rotas de Item
const router = express.Router();
module.exports = router;

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   get all items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route  POST api/items
// @desc   create a item
// @access Public (TODO: private  auth ainda)
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item));
});

// @route  DELETE api/items/id
// @desc   delete a item
// @access Public (TODO: private  auth ainda)
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

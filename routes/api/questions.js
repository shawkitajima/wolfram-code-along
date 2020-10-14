const { Router } = require('express');

const express = require('express');
const router = express.Router();
const questionCtrl = require('../../controllers/questions');

router.get('/', questionCtrl.index);
router.post('/', questionCtrl.create);

module.exports = router;
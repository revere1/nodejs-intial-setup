var express = require('express');
var router = express.Router();
const { asyncMiddleware: _async } = require('../../common');
const handler = require('./testHandler');

router.get('/list-all', [_async(handler.getData)]);
router.get('/', [_async(handler.getRecordBasedOnId)]);
router.post('/', [_async(handler.createData)]);
router.put('/:recordId', [_async(handler.updateData)]);

module.exports = router;
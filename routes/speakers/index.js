const speakers = require('express').Router();

const findObject = require('../findObject');
const sql = require('./sql');
const all = require('./methods/all');
const one = require('./methods/one');
const add = require('./methods/add');
const del = require('./methods/del');
const upd = require('./methods/upd');
const prepared = require('./prepared');

speakers.param('speakerId', findObject(sql));

speakers.get('/', all);
speakers.get('/:speakerId', one);
speakers.post('/', add);
speakers.delete('/:speakerId', del);
speakers.put('/:speakerId', upd);

speakers.use('/:speakerId/prepared', prepared);

module.exports = speakers;

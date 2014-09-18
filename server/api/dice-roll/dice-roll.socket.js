/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var DiceRoll = require('./dice-roll.model');

exports.register = function(socket) {
  DiceRoll.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  DiceRoll.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('dice-roll:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('dice-roll:remove', doc);
}
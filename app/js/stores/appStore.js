var appDispatcher = require('../dispatcher/appDispatcher');
var appActions = require('../actions/appActions');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var items = [{txt: 'item0', key:'item1', done: false},
             {txt: 'item1', key:'item2', done: false}];

function addItem(item) {
  var itemKey = 'item' + (items.length + 1);
  items.push({txt: item, key: itemKey, done: false});
}

function removeItem(itemKey) {
  var itemIndex = items.map(function(item, index) {
    if(item.key === itemKey) {
      return index;
    }
  }).filter(isFinite);

  items.splice(itemIndex, 1);
}

function completeItem(itemKey) {
  var item = items.filter(function(item) {
    return item.key === itemKey;
  });

  if(item[0].done) {
    item[0].done = false;
  } else {
    item[0].done = true;  
  }
}

var appStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getItems: function () {
    return items;
  },

  dispatcherIndex: appDispatcher.register(function (payload) {
    switch(payload.type) {
      case 'add-item':
      addItem(payload.item);
      break;

      case 'remove-item':
      removeItem(payload.item);
      break;

      case 'complete-item':
      completeItem(payload.item);
      break;
    }

    appStore.emitChange();

    return true;

  })
});

module.exports = appStore;

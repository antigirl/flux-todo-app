var appDispatcher = require('../dispatcher/appDispatcher');

module.exports = {
  addItem: function(item) {
    appDispatcher.dispatch({
      type: 'add-item',
      item: item
    });
  },

  removeItem: function(item) {
    appDispatcher.dispatch({
      type: 'remove-item',
      item: item
    });
  },

  completeItem: function(itemKey) {
    appDispatcher.dispatch({
      type: 'complete-item',
      item: itemKey
    });
  }
}

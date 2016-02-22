import Ember from 'ember';

export default Ember.Component.extend({
  isMessageShowing: false,
  actions: {
    messageShow: function() {
      this.set('isMessageShowing', true);
    },
    messageHide: function() {
      this.set('isMessageShowing', false);
    }
  }
});

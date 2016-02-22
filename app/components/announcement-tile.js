import Ember from 'ember';

export default Ember.Component.extend({
  isMessageShowing: false,
  actions: {
    messageShow: function() {
      this.set('isMessageShowing', true);
    },
    messageHide: function() {
      this.set('isMessageShowing', false);
    },
    delete(announcements) {
      if (confirm('Are you sure you want to delete this announcement?')) {
        this.sendAction('destroyAnnouncement', announcements);
      }
    }
  }
});

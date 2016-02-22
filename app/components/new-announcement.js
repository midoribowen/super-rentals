import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },
  save1() {
    var params = {
      type: this.get('type'),
      message: this.get('message')
    };
    this.set('addNewAnnouncement', false),
    this.sendAction('save2', params);
  }
  }
});

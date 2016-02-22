import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcements')
  },

  actions: {
    save3(params) {
      var newAnnouncement = this.store.createRecord('announcements', params);
      newAnnouncement.save();
      this.transitionTo('announcements');
    }
  }
});

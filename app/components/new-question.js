import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        contents: this.get('contents'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});

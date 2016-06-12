import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswer() {
      var params = {
        contents: this.get('contents'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('newAnswer', params);
    }
  }
});

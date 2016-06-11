import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newAnswer() {
      var params = {
        contents: this.get('contents'),
        author: this.get('author')
      };
      this.sendAction('newAnswer', params);
    }
  }
});

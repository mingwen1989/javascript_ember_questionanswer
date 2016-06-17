import Ember from 'ember';

export default Ember.Component.extend({
  readingList: Ember.inject.service(),

  commentCount: Ember.computed('question.answers.length', function(){
    return this.get('question.answers.length');
  }),
  actions: {
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    addToReadingList(item) {
    this.get('readingList').add(item);
    console.log(item);
    }
  }
});

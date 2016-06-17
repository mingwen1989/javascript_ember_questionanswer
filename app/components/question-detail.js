import Ember from 'ember';

export default Ember.Component.extend({
    commentCount: Ember.computed('question.answers.length', function(){
      return this.get('question.answers.length');
    }),
});

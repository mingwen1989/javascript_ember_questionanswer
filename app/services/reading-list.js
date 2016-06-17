import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  itemCount: 0,

  add(item) {
  this.get('items').pushObject(item);
  this.set('itemCount', parseInt(this.get('itemCount')) + 1);
}
});

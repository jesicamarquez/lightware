'use strict';

var UserStore = Reflux.createStore({
  listenables: [require('../actions/UserActions.jsx')],
  onUpdate(user){
    this.user = user || {};
    this.trigger(this.user);
  },
  getInitialState() {
    this.user = this.user || {};
    return this.user;
  }
});
module.exports = UserStore;
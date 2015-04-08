'use strict'

var UserActions = require('../../../actions/UserActions.jsx');

var Item = React.createClass({
  render() {
    var {id, label} = this.props.item;
    return (
      <section>
        <div className="video">
          <video controls="true">
            <source src="/assets/videos/lady_reversed.mp4" type="video/mp4" />
          </video>
        </div>
        <span>{label}</span>
      </section>
    );
  }
});

var Dashboard = React.createClass({
  mixins: [Reflux.connect(require('../../../store/UserStore.jsx'), 'user')],
  render() {
    var {name, state} = this.props.params;
    return (
      <article className={name}>
      {this.state.user.id? (<div>
      {_.map(this.state.user.items, (item, index) => { return <Item key={`item${index}`} item={item} /> })}
      </div>) : null}
      </article>
    );
  }
});

module.exports = Dashboard;



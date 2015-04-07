'use strict'
var context = require('../../../json/context');
var UserActions = require('../../../actions/UserActions.jsx');
var {Link} = Router;
var Header = React.createClass({
  hideCover() {
    this.refs.cover.getDOMNode().className += ' hide';
  },
  updateUser(data) {
    UserActions.update(data);
  },
  render() {
    var self = this;
    return (
      <main>
        <div ref="cover" className="cover" onClick={this.hideCover}>
          <div>
            <img src="/assets/images/logo.svg" />
            <h1>Lightware</h1>
          </div>
        </div>
        <ul className="list">
        {_.map(context.list, ((data) => {
          return <li><Link onClick={self.updateUser.bind(null, data)} to={data.id}>{data.label}</Link></li>
        }))}
        </ul>
        <section className="back"><Link onClick={self.updateUser} to="/">back</Link></section>
      </main>
    );
  }

});

module.exports = Header;

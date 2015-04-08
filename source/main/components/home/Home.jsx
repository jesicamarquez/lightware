'use strict'
var context = require('../../../json/context');
var UserActions = require('../../../actions/UserActions.jsx');
var {Link} = Router;
var Header = React.createClass({
  hideCover() {
    this.getDOMNode().className += ' hide';
    // this.refs.cover.getDOMNode().className += ' hide';
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
            {/* PYRAMID */}
            <div className="viewport">
              <div className="pyramid-outer">
                <div className="pyramid">
                  <div className="pyramid-inner">
                    <div className="pyramid-base"></div>
                    <div className="pyramid-face"></div>
                    <div className="pyramid-face"></div>
                    <div className="pyramid-face"></div>
                    <div className="pyramid-face"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* END PYRAMID */}
            <h3 className="title">{context.title}</h3>
          </div>
        </div>
        <div className="listWrapper">
          <ul className="list">
          {_.map(context.list, ((data) => {
            return <li><Link onClick={self.updateUser.bind(null, data)} to={data.id}>{data.label}</Link></li>
          }))}
          </ul>
        </div>
        <section className="back"><Link onClick={self.updateUser} to="/">back</Link></section>
      </main>
    );
  }

});

module.exports = Header;

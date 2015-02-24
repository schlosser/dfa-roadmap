
var Resource = React.createClass({
  render: function() {
    return (
      <div className="resource">
        <a href={ this.props.url }><h4>{ this.props.title }</h4></a>
      </div>
    );
  }
});

var InnerApp = React.createClass({
  render: function() {
    var resources = [];
    for (var i=0; i < this.props.resources.length; i++) {
        resources.push(<Resource title={this.props.resources[i].title} url={this.props.resources[i].url} />);
    }
    return <div>{ resources }</div>;
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      resources: {}
    };
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open('GET', '/resources', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        if (this.isMounted()) {
          this.setState({
            resources: data['resources']
          });
        }
      } else {
        // We reached our target server, but it returned an error

      }
    }.bind(this);

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  },

  render: function() {
    return <InnerApp resources={ this.state.resources } />;
  }
});

React.render(
  <App />,
  document.getElementById('container')
);

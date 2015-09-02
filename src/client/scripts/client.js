import AppHomeRoute from './AppHomeRoute';

let rootNode = document.getElementById('app');
console.log(rootNode);
class AppReactComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.hello.world}
      </div>
    );
  }
}

let App = Relay.createContainer(AppReactComponent, {
  fragments: {
    hello: () => Relay.QL`
      fragment on Hello {
        world
      }
    `
  }
});

React.render(
  <Relay.RootContainer
    Component={App}

    route={new AppHomeRoute()}

    renderLoading={function() {
    return <div>Loading...</div>;
  }}

  renderFetched={function(data) {
    console.log(data);
    return (
        <App {...data} />
    );
  }}
    />,
  rootNode
);
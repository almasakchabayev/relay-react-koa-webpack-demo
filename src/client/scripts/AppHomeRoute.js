export default class extends Relay.Route {
  //static path = 'http://localhost:3000/graphql';
  static queries = {
    hello: (Component) => Relay.QL`
      query {
        hello {
          ${Component.getFragment('hello')},
        }
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
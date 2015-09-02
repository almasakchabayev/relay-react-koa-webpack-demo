import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql/type';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

let {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Game') {
      return getGame(id);
    } else if (type === 'HidingSpot') {
      return getHidingSpot(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Game) {
      return gameType;
    } else if (obj instanceof HidingSpot)  {
      return hidingSpotType;
    } else {
      return null;
    }
  }
);

let helloType = new GraphQLObjectType({
  name: 'Hello',
  fields: {
    id: globalIdField('Hello'),
    world: {
      type: GraphQLString,
      resolve: () => {
        return 'hello, Almas!';
      }
    }
  },
  interfaces: [nodeInterface],
});

let queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    node: nodeField,
    hello: {
      type: helloType,
      resolve: () => {
        return {
          id: '1',
          world: 'hello, world'
        }
      }
    }
  }
});

let schema = new GraphQLSchema({
  query: queryType
});

export default schema;
import path from 'path';
import url from 'url';
import koa from 'koa';
import Router from 'koa-router';
import send from 'koa-send';
import koaStatic from 'koa-static';
import {graphql} from 'graphql';
import parse from 'co-body';
import schema from './schema';

let app = koa();
let router = new Router();
let server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');
const PATH_INDEX = path.resolve(__dirname, '../client/index.html');

router.get('/', function *() {
  yield send(this, PATH_INDEX);
});

router.get('/graphql', function *() {
  let payload = url.parse(this.request.url, true);
  console.log(payload);
  let response = yield graphql(schema, payload.query);
  console.log(response);
  this.body = response;
});
router.post('/graphql', function *() {
  let payload = yield parse(this);
  console.log(payload);
  let response = yield graphql(schema, payload.query);
  console.log(response);
  this.body = response;
});

app.use(koaStatic(PATH_DIST));
app.use(router.middleware());

server = app.listen(process.env.PORT || 3000, () => {
    let port = server.address().port;
    console.log('Server is listening at %s', port);
  }
);
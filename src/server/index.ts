import * as restify from 'restify';
import { PORT } from './config/core.config';
import { Api } from './api';

const server = restify.createServer();
new Api(server);

server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
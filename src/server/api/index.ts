import * as restify from 'restify';
import { TestApi } from './test/test.api';

export class Api {
    constructor(private server: restify.Server) {
      new TestApi(server);
    }
}
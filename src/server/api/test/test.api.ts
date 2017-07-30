import * as restify from 'restify';
import { ApiHelper } from '../../common/helpers';

export class TestApi extends ApiHelper {

  constructor(server: restify.Server) {
    super(server);
    this.get(this.url('/test/:name'), this.hello);
  }

  hello(req: restify.Request, res: restify.Response, next: restify.Next): void {
    res.send(`hello ${ req.params.name }`);
    next();
  }
}
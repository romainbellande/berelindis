import * as restify from 'restify';

export class MiddlewareHelper {
  constructor(protected req: restify.Request,
              protected res: restify.Response,
              protected next: restify.Next) {}

  static init<T>(req: restify.Request, res: restify.Response, next: restify.Next) {
    new MiddlewareHelper(req, res, next);
  }
}
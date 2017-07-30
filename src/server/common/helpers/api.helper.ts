import * as restify from 'restify';
import { BASE_API } from '../../config/core.config';

type Middleware = (req: restify.Request, res: restify.Response, next: restify.Next) => void;

export abstract class ApiHelper {
  constructor(protected server: restify.Server) {}

  get(endpoint: string, middleware: Middleware): void {
    this.server.get(endpoint, middleware);
  }

  url(endpoint: string): string {
    return BASE_API + endpoint;
  }
}
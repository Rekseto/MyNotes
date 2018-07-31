import logger from "koa-logger";
import Router from "koa-router";
import koaBody from "koa-body";
import Koa from "koa";
import send from 'koa-send'
import passport from "koa-passport";
import cors from '@koa/cors';
import path from 'path';
/**
 * @class   {App}
 * @export  {App}
 * @access  public
 */

export default class App {
  /**
   * Creates a new server and populates it with some basic middlewares.
   *
   * @param   {Object}    config              Configuration object
   * @param   {string}    config.host         Server host
   * @param   {string}    config.port         Server port
   */
  constructor(config = {}) {
    this.config = config;
    this.router = new Router();
    this.engine = new Koa();
    this.passport = passport;

    // @todo set query limits:
    this.engine.use(logger());
    this.engine.use(koaBody());
    this.engine.use(cors());

    // Passport initialization:
    this.engine.use(this.passport.initialize());
  }

  /**
   * Just a helper so we don't have to add global middlewares with
   * `app.engine.use` each time.
   *
   * @example
   *  app.use(logger());
   *  app.get(something());
   *
   * @param   {Object}        middleware
   * @return  {void}
   * @access  public
   */
  use(middleware) {
    this.engine.use(middleware);
  }

  /**
   * Populates engine with additional middlewares from router and runs the
   * server.
   *
   * @return  {void}
   * @access  public
   */
  run() {
    console.log('server listening on ' + this.config.port)
    this.engine.use(this.router.routes());
    this.engine.use(this.router.allowedMethods());

    this.engine.use(async (ctx) => {
      await send(ctx, ctx.path, { root: path.join(__dirname, '../..' ,'/public')});
    })
  
    this.engine.listen(this.config.port);
  }
}

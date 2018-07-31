import config from "config";
import fs from 'fs';
import { join } from 'path';
import views from 'koa-views'
import {getDirectories, markdownToHtml, readFile} from '../utils/utils.js'

export default (app) => {

  app.use(views(join(__dirname , '../../view'), {
    extension: 'ejs'
  }));

  app.router.get('/', async (ctx) => {
    await ctx.render('index', { categories: getDirectories(join(__dirname,'../../notes'))});
  })


  app.router.get("/category/:category", async (ctx) => {
    await ctx.render('category', { notes: getDirectories(join(__dirname,`../../notes/${ctx.params.category}/`)) , category: ctx.params.category});
  })

  app.router.get('/category/:category/:note', async(ctx) => {
    const data = await readFile(join(__dirname,`../../notes/${ctx.params.category}/${ctx.params.note}/index.md`))
    const note = converter.makeHtml(data.toString());
    
    await ctx.render('note', { note});
  })

  app.router.get('/category/:category/:note/:source', async(ctx) => {
    const data = await readFile(join(__dirname,`../../notes/${ctx.params.category}/${ctx.params.note}/${ctx.params.source}.md`))
    const note = markdownToHtml(data);

    await ctx.render('note', { note});
  })
}
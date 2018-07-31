import { join, resolve } from "path";
import fs from 'fs';
import config from "config";
import load from "call-dir";
import App from "./core/AppCore";

export default function (...customOptions) {
  const app = new App(config.get("server"));


  load(resolve(__dirname, "./routes"), (src) => {
    require(src).default(app);
  });
 
  app.run();


}

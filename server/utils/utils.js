import fs from 'fs';
import showdown from 'showdown';

export const readFile = util.promisify(fs.readFile);
export const getDirectories = p => fs.readdirSync(p).filter(f => fs.statSync(join(p, f)).isDirectory())

const converter = new showdown.Converter();
export const markdownToHtml = (data) => converter.makeHtml(data.toString());
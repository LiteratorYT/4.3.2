// data.js
export const context = {
  isLoggedIn: true,
  username: 'John',
};
import { context } from "./data.js";

const templateSource = await fetch("./template.hbs");
const source = await templateSource.text();

const template = Handlebars.compile(source);

const html = template(context);
document.getElementById("app").innerHTML = html;

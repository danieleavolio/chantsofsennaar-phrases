import { c as create_ssr_component } from "../../chunks/ssr.js";
import { inject } from "@vercel/analytics";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

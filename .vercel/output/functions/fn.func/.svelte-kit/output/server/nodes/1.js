

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DnJ25KrL.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.agM0w8aq.js","_app/immutable/chunks/entry.CSZp6uOv.js"];
export const stylesheets = [];
export const fonts = [];

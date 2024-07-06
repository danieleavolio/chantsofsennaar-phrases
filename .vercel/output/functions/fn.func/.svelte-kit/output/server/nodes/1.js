

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.VsWZZNdk.js","_app/immutable/chunks/scheduler.DOWdz73l.js","_app/immutable/chunks/index.CjzA4Pc3.js","_app/immutable/chunks/entry.DJgkbaCp.js"];
export const stylesheets = [];
export const fonts = [];

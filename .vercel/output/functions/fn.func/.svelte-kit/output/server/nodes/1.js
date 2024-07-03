

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CHzIjZZz.js","_app/immutable/chunks/scheduler.qUOb8npH.js","_app/immutable/chunks/index.LGmkCgDF.js","_app/immutable/chunks/entry.BNimmTvM.js"];
export const stylesheets = [];
export const fonts = [];

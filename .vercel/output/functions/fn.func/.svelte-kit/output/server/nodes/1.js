

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BQ21_c8g.js","_app/immutable/chunks/scheduler.DOWdz73l.js","_app/immutable/chunks/index.Butg4m21.js","_app/immutable/chunks/entry.BxyYqdpD.js"];
export const stylesheets = [];
export const fonts = [];

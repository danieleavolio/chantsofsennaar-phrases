

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DDDsaD0c.js","_app/immutable/chunks/scheduler.BBgnlA1w.js","_app/immutable/chunks/index.DqNRYKPz.js","_app/immutable/chunks/entry.DItqlnxN.js"];
export const stylesheets = [];
export const fonts = [];

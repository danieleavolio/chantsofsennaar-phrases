export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","style.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.B0OmCEOo.js","app":"_app/immutable/entry/app.nekRXnIy.js","imports":["_app/immutable/entry/start.B0OmCEOo.js","_app/immutable/chunks/entry.CSZp6uOv.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/entry/app.nekRXnIy.js","_app/immutable/chunks/scheduler.BXr5QVQj.js","_app/immutable/chunks/index.agM0w8aq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

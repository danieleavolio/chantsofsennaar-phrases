export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["'0'.png",".nojekyll","Alchemists/'0'.png","Alchemists/'1'.png","Alchemists/'2'.png","Alchemists/'3'.png","Alchemists/'4'.png","Alchemists/'5'.png","Alchemists/'6'.png","Alchemists/'7'.png","Alchemists/'8'.png","Alchemists/'9'.png","Alchemists/'Alchemist'.png","Alchemists/'Bard'.png","Alchemists/'Book'.png","Alchemists/'Brother'.png","Alchemists/'Carbon'.png","Alchemists/'Close'.png","Alchemists/'Copper'.png","Alchemists/'Death'_-_'Dead'.png","Alchemists/'Door'.png","Alchemists/'Fairy'.png","Alchemists/'Fear'.png","Alchemists/'Find'.png","Alchemists/'Fire'.png","Alchemists/'Formula'.png","Alchemists/'Gold'.png","Alchemists/'Help'.png","Alchemists/'Laboratory'.png","Alchemists/'Library'.png","Alchemists/'Make'_-_'Create'.png","Alchemists/'Me'.png","Alchemists/'Mine'.png","Alchemists/'Monster'.png","Alchemists/'Not'.png","Alchemists/'Open'.png","Alchemists/'Plant'.png","Alchemists/'Plural'.png","Alchemists/'Refectory'.png","Alchemists/'Seek'_-_'Want'.png","Alchemists/'Silver'.png","Alchemists/'Transform'_-_'Transformation'.png","Alchemists/'Warrior'.png","Alchemists/'You'.png","Anchorites/'Climb'.png","Anchorites/'Come'.png","Anchorites/'Dead'.png","Anchorites/'Die'.png","Anchorites/'Disregard'.png","Anchorites/'Door'.png","Anchorites/'Doors'.png","Anchorites/'Exile'.png","Anchorites/'Fear'.png","Anchorites/'Go'.png","Anchorites/'Greetings'.png","Anchorites/'Help'.png","Anchorites/'Key'.png","Anchorites/'Make'_-_'Create'.png","Anchorites/'Man'_-_'Human'.png","Anchorites/'Me'.png","Anchorites/'My_People'.png","Anchorites/'Not'.png","Anchorites/'Open'.png","Anchorites/'People'.png","Anchorites/'Peoples'.png","Anchorites/'Plural'.png","Anchorites/'Revive'.png","Anchorites/'Seek'_-_'Want'.png","Anchorites/'Stop'.png","Anchorites/'Stranger'.png","Anchorites/'Talk'.png","Anchorites/'Tower'.png","Anchorites/'Up'.png","Anchorites/'Us'_-_'We'.png","Anchorites/'Wait'.png","Anchorites/'You'.png","banner.png","Bards/'Abbey'.png","Bards/'Agora'.png","Bards/'Ascend'.png","Bards/'Bard'.png","Bards/'Be'.png","Bards/'Beauty'.png","Bards/'Book'.png","Bards/'Brother'.png","Bards/'Carry'_-_'Possess'.png","Bards/'Comedy'.png","Bards/'Compass'.png","Bards/'East'.png","Bards/'Find'.png","Bards/'Fire'.png","Bards/'Fortress'.png","Bards/'Free'.png","Bards/'Go'_-_'Pass'.png","Bards/'Greetings'.png","Bards/'Hammer'.png","Bards/'Idiot'.png","Bards/'Instrument'.png","Bards/'Love'_-_'Like'.png","Bards/'Man'_-_'Human'.png","Bards/'Me'.png","Bards/'Monster'.png","Bards/'Music'.png","Bards/'North'.png","Bards/'Not'.png","Bards/'Path'.png","Bards/'Play'.png","Bards/'Pliers'.png","Bards/'Plural'.png","Bards/'Saw'.png","Bards/'Seek'_-_'Want'.png","Bards/'South'.png","Bards/'Theatre'.png","Bards/'Warrior'.png","Bards/'Weapon'.png","Bards/'West'.png","Bards/'Windmill'.png","Bards/'You'.png","Bards/'¿'_-_''_(Question_Marks).png","Devotee/'Abbey'.png","Devotee/'Cemetery'.png","Devotee/'Church'.png","Devotee/'Close'.png","Devotee/'Death'_-_'Dead'.png","Devotee/'Devotee'.png","Devotee/'Door'.png","Devotee/'Find'.png","Devotee/'Free'.png","Devotee/'Garden'.png","Devotee/'Go'_-_'Pass'.png","Devotee/'God'.png","Devotee/'Greetings'.png","Devotee/'Help'.png","Devotee/'Instrument'.png","Devotee/'Key'.png","Devotee/'Lens'.png","Devotee/'Love'_-_'Like'.png","Devotee/'Make'_-_'Create'.png","Devotee/'Man'_-_'Human'.png","Devotee/'Me'.png","Devotee/'Music'.png","Devotee/'Not'.png","Devotee/'Open'.png","Devotee/'Plant'.png","Devotee/'Pot'.png","Devotee/'Potion'.png","Devotee/'Preacher'.png","Devotee/'See'_-_'Look'.png","Devotee/'Seek'_-_'Want'.png","Devotee/'Talk'.png","Devotee/'Up'.png","Devotee/'Warrior'.png","Devotee/'You'.png","favicon.png","files.json","style.css","Warriors/'Balance'.png","Warriors/'Bellman'.png","Warriors/'Big'.png","Warriors/'Bottle'.png","Warriors/'Call'.png","Warriors/'Carry'_-_'Possess'.png","Warriors/'Chosen'.png","Warriors/'Crate'.png","Warriors/'Death'.png","Warriors/'Duty'.png","Warriors/'Fear'.png","Warriors/'Fortress'.png","Warriors/'Go'_-_'Pass'.png","Warriors/'Help'.png","Warriors/'Impure'.png","Warriors/'Instrument'.png","Warriors/'Key'.png","Warriors/'Lay'.png","Warriors/'Love'.png","Warriors/'Make'_-_'Create'.png","Warriors/'Moon'.png","Warriors/'Music'.png","Warriors/'Not'.png","Warriors/'Plural'.png","Warriors/'Protect'.png","Warriors/'Push'.png","Warriors/'Scientist'.png","Warriors/'Seek'_-_'Want'.png","Warriors/'Small'.png","Warriors/'Sun'.png","Warriors/'Treasure'.png","Warriors/'Trolley'.png","Warriors/'Vessel'.png","Warriors/'Wait'.png","Warriors/'Warrior'.png","Warriors/'Weapon'.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.Xd8ehZvu.js","app":"_app/immutable/entry/app.wh1FAjz2.js","imports":["_app/immutable/entry/start.Xd8ehZvu.js","_app/immutable/chunks/entry.BxyYqdpD.js","_app/immutable/chunks/scheduler.DOWdz73l.js","_app/immutable/entry/app.wh1FAjz2.js","_app/immutable/chunks/scheduler.DOWdz73l.js","_app/immutable/chunks/index.Butg4m21.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

seajs.config({
	base: "./js",
	debug : 2,
	paths : {
		'static' : './../../static/scripts/'
	},
    alias: {
        'zepto' : './../static/scripts/module/zepto.min',
        'spin' : 'static/module/spin.min',
        'template' : 'static/module/template',
        'h5Client' : 'static/utils/h5Client'
    },
    preload : ['zepto'],
    map: [
	    //['.js', '.js?' + new Date().getTime() ]
	  ]
});

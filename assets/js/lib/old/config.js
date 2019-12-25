requirejs.config({
    baseUrl: './assets/js',
    deps: ['game'],
   // urlArgs: "myparam=" + (new Date()).getTime(),
    paths: {
        'jquery': '/assets/js/lib/jquery-1.7.2.min',
        'pixi': '/assets/js/lib/pixi',
        'pixi-ui': '/assets/js/lib/pixi-ui',
        'socket.io': '/assets/js/lib/socket.io',
        'moment': '/assets/js/lib/moment.min'
    }
});

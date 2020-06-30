// Initialize your app
var app = new Framework7({
    id: 'com.app',
    root: '#app',
    theme: 'md',
    view: {
        pushState: false
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Floristeria',
    dialog: {
        title: 'Floristeria',
        buttonOk: 'Aceptar',
    },
    routes: [{
            path: '/home/',
            url: 'index copy.html',
            name: 'home',
        },
        {
            path: '/about/',
            url: 'about.html',
            name: 'about',
        },
        {
            path: '/perfil/',
            url: 'perfil.html',
            name: 'perfil',
        },
        {
            path: '/flores/',
            url: 'flores.html',
            name: 'carnes',
        }
    ]
});

// Export selectors engine
var $$ = Dom7;
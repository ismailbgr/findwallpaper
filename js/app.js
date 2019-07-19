var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  name: 'FindWallpaper', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

var photoarray = [];

for(var i = 0; i < 100; i++){
photoarray.push("https://source.unsplash.com/random/1080x1920");
}

var photos = app.photoBrowser.create({

photos:photoarray,
theme:"dark",
backLinkText:"Çık",
navbarOfText:"/"

});

$$(".pb-button").on("click",()=>{photos.open();});
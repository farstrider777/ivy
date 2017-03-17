import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import setup from './setup';
import Config from './config.js';
import SignUp from './controllers/signUp';
import Login from './controllers/login';
import Home from './controllers/home';
import Upload from './controllers/upload';
import Single from './controllers/single';


angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(Config)
  .run(setup)
  .controller('SignUp', SignUp)
  .controller('Login', Login)
  .controller('Home', Home)
  .controller('Upload', Upload)
  .controller('Single', Single)

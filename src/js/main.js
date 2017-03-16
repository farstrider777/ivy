import angular from 'angular';
import 'angular-ui-router';
import Config from './config.js';
import SignUp from './controllers/signUp';
import Login from './controllers/login';
import Home from './controllers/home'


angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('SignUp', SignUp)
  .controller('Login', Login)
  .controller('Home', Home)

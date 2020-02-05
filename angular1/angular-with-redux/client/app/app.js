import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngRedux      from 'ng-redux';

import AppComponent from './app.component';
// components
import NavigationComponent  from './components/navigation/navigation';
import HomeComponent        from './containers/home/home';
import AboutComponent        from './containers/about/about';

// root reducer
import RootReducer from './reducers';

// styles for the whole application
// import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

console.log('NavigationComponent.name', NavigationComponent.name);
angular
  .module('app', [
    uiRouter,
    ngRedux,
    NavigationComponent.name,
    HomeComponent.name,
    AboutComponent.name
  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider) => {
    "ngInject";

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        template: '<app></app>'
      })
      .state('app.home', {
        url: '/home',
        template: '<home></home>'
      })
      .state('app.about', {
        url: '/about',
        template: '<about></about>'
      });

    $urlRouterProvider.otherwise('/about');

    // root store
    // provideStore - option to use existing store
    $ngReduxProvider.createStoreWith(RootReducer);
  })
  .component('app', AppComponent);
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './about.html';

class AboutController {
  constructor($ngRedux, ...props) {
    console.log('props', props);
    // TODO: extend generically
    this.state = props[0];
    this.content = 'The project is about combining Redux with Augular and VueJS';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {})(this);
  }

  redirectToHome() {
    this.state.go('app.home');
  }

  mapStateToThis(state) {
    return {
      todos: state.todos
    };
  }
}
// inject deps
AboutController.$inject = ["$ngRedux", "$state"];

let aboutComponent = {
  restrict: 'E',
  binding: {},
  template,
  controller: AboutController
};

const aboutModule = angular.module('about', [
  uiRouter
])
.component('about', aboutComponent);

export default aboutModule;
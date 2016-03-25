(function() {
  'use strict';

  angular
    .module('app.auth')
    .directive('gzAuthForm', gzAuthForm);

  function gzAuthForm() {
    return {
      templateUrl: 'app/auth/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: '=',
        formTitle: '@',
        submitAction: '&'
      }
    };
  }

  function AuthFormController() {
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };
    vm.ngModelOptions = {
      updateOn: 'default blur',
      debounce: {
        'default': 1000,
        'blur': 0
      }
    };
  }

})();
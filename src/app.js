import angular from "angular";

const appComponent = {
  template: require("./app.html"),
  controller: AppController
};

class AppController {
  constructor() {
    var ctrl = this;
    ctrl.url = "https://github.com/preboot/angular-webpack";
  }
}

export default angular.module("app", []).component("app", appComponent);

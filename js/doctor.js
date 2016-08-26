var app = angular.module('myApp',['ngRoute']);

app.config(['$httpProvider',function($httpProvider){
  $httpProvider.defaults.headers.post = {"token":localStorage.getItem('token')};
  $httpProvider.defaults.headers.get = {"token":localStorage.getItem('token')};
}]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/query', {
    templateUrl: 'modules/doc_query.html',
    controller: 'queryCtrl'
  })
  .when('/edit/:id', {
    templateUrl: 'modules/doc_edit.html',
    controller: 'editCtrl'
  })
  .when('/app/:id', {
    templateUrl: 'modules/doc_app.html',
    controller: 'appCtrl'
  })
  .when('/setting/:id', {
    templateUrl: 'modules/doc_setting.html',
    controller: 'setCtrl'
  })
  .otherwise({
      redirectTo: '/query'
  });
});

app.controller("myCtrl",function($scope,$location){
  $scope.pageId = 'doctor';
  $scope.menu = config.menu;

  $scope.$on("$viewContentLoaded",function(){
      console.log("ng-view content loaded!");
  });

  $scope.$on("$routeChangeStart",function(event,next,current){
      //event.preventDefault(); //cancel url change
      console.log("route change start!");
  });
});

app.controller('queryCtrl',function($scope,$http){

  $scope.page = 0;
  $scope.pageCount = 0;
  $scope.count = 0;
  $scope.show_prev = true;
  $scope.show_next = true;
  $scope.query_url = config.host + config.doc_query;
  $scope.delete_url = config.host + config.doc_delete;
  $scope.query = function(page){
    $http({
      method:'get',
      url:$scope.query_url,
      params:{
        page:page,
        startPage:1
      }
    }).success(function(data){
      $(window).scrollTop(0);
      $scope.doctors = data.data;
      $scope.page = data.page;
      $scope.pageCount = data.pageCount;
      $scope.count = data.count;
      if ($scope.page > 1) {
        $('.page_prev').show();
      }else {
        $('.page_prev').hide();
      }
      if ($scope.page < $scope.pageCount) {
        $('.page_next').show();
      }else {
        $('.page_next').hide();
      }
    });
  };

  $scope.delete = function(id){
    $http({
      method:'post',
      headers:{
        'Content-Type':'application/json; charset=UTF-8'
      },
      url: $scope.delete_url,
      data:{ids:[id]}
    }).success(function(){
      alert('删除成功');
      $scope.query($scope.page);
    });
  };

  $scope.query($scope.page + 1);
});

app.controller("editCtrl",function($scope,$http,$routeParams){
  $(window).scrollTop(0);
  $scope.id = $routeParams.id;
  $http({
    method:'get',
    url: config.host + config.doc_get,
    params:{
      id: $scope.id
    }
  }).success(function(data){
    $scope.icon = data.rs.icon;
    $scope.name = data.rs.name;
    $scope.sex = data.rs.sex;
    $scope.level = data.rs.level;
    $scope.experts = data.rs.experts;
    $scope.introduce = data.rs.introduce;
    $scope.order = data.rs.order;
    $scope.team = data.rs.team;
  });
});

app.controller('setCtrl',function($scope,$http,$routeParams){
  $scope.id = $routeParams.id;
  $http({
    method:'get',
    url: config.host + config.dset_get,
    params:{
      doctorId: $scope.id
    }
  }).success(function(data){
    $scope.mobile = data.rs.mobile;
    $scope.openOutpatient = data.rs.openOutpatient;
    $scope.allowAllOutpatient = data.rs.allowAllOutpatient;
    $scope.allowTeamOutpatient = data.rs.allowTeamOutpatient;
    $scope.allowDoctorsOutpatient = data.rs.allowDoctorsOutpatient;
    $scope.openOperation = data.rs.openOperation;
    $scope.allowAllOperation = data.rs.allowAllOperation;
    $scope.openReport = data.rs.openReport;
    $scope.roles = data.rs.roles;
  });
});

app.controller('appCtrl',function($scope,$http,$routeParams){
  $scope.id = $routeParams.id;
  $http({
    method:'get',
    url: config.host + config.dset_get,
    params:{
      doctorId: $scope.id
    }
  }).success(function(data){
    $scope.bindApp = data.rs.bindApp;
    $scope.bindWx = data.rs.bindWx;
  });
});

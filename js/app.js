var app = angular.module('myApp',[]).config(['$httpProvider',function($httpProvider){
  $httpProvider.defaults.headers.post = {"token":localStorage.getItem('token')};
  $httpProvider.defaults.headers.get = {"token":localStorage.getItem('token')};
}]).controller('myCtrl',function($scope,$http){
  $scope.menu = config.menu;
  $scope.page = 0;
  $scope.pageCount = 0;
  $scope.count = 0;
  $scope.show_prev = true;
  $scope.show_next = true;
  $scope.query_url = config.host + config.user_query;
  $scope.open_url = config.host + config.user_open;
  $scope.close_url = config.host + config.user_close;
  $scope.query = function(page){
    $http({
      method:'get',
      url:$scope.query_url,
      headers:{
        // 'token':localStorage.getItem('token')
      },
      params:{
        page:page,
        startPage:1
      }
    }).success(function(data){
      $(window).scrollTop(100);
      $scope.users = data.data;
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

  $scope.open = function(id){
    $http({
      method:'post',
      url: $scope.open_url,
      params:{id:id}
    }).success(function(){
      alert('打开成功');
      $scope.query($scope.page);
    });
  };

  $scope.close = function(id){
    $http({
      method:'post',
      url: $scope.close_url,
      params:{id:id}
    }).success(function(){
      alert('关闭成功');
      $scope.query($scope.page);
    });
  };

  $scope.query($scope.page + 1);
});

'use strict';

angular.module('app')
.component('wistia', {
    bindings: {
        pass: '@'
    },
    templateUrl:'/lib/wistia_component.html',
    controller: function($scope){
    
    let wistiapass = this.pass;
    if(!wistiapass){
      wistiapass = '2ffdf30d822ab8fb5be1b9efd0311d008f4a7a4764a514a08c26b59dd9afdf6b'
    }
    console.log('wistia pass',wistiapass);
    let hash = '';
    $('#fileupload').fileupload({
      dataType: 'json',
      formData: {
        api_password:wistiapass
      },
      add: function(e,data){
        data.submit();
      },
      progressall: function (e, data) {

        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .bar').css(
            'width',
            progress + '%'
        );
        $('#progress span').text(progress+'%');
      },
      done: function(e,data){
        hash = 'http://fast.wistia.net/embed/iframe/' + data.result.hashed_id;
        $('#fileupload').before('<iframe src=\"'+hash+"\" class=\"wistia_embed\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" width=\"640\" height=\"360\" name=\"wistia_embed\"></iframe>");
      }
    });

    }

  });
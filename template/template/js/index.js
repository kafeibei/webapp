define(function( require, exports, modules ){
	require('template');
	require.async('h5Client', function(){
		hgClient.getUserInfo(function( response ){		//获取用户登录信息
			var userInfo = response && (response.userInfo || response) || '';
			console.log( userInfo );
		});
	});
});
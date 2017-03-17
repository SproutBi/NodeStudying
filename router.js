function route(handle,pathname,response)
{
	if(typeof handle[pathname] ==='function')
	{
		return handle[pathname](response);
	}
	else
	{
		console.log("当前路由未做配置: "+ pathname);
		return"404 页面不存在";  
	}
	
}

exports.route = route;
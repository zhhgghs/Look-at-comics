//a:代表首页地址
//b:代表更新页地址
//c:代表排行页地址
//d:代表分类页地址
//e:代表资讯页地址


function navigationBar(a,b,c,d,e){
	
	var inputImg="navigationBar/img/QQ截图20200908215548.png";
	var logo="navigationBar/img/logo-kmh.png";
	var userImg="navigationBar/img/visitor.png";
	return new Vue({
		el:'#navigationBar',
		components:{
			'navigationBar':{
					template:`<div id="navigations">
					<div id="navigationBarImg">
						<img src="`+logo+`" />
					</div>
					<div id="navigationBarText">
						<span><a href='`+a+`'>首页</a></span>
						<span><a href='`+b+`'>更新</a></span>
						<span><a href='`+c+`'>排行</a></span>
						<span><a href='`+d+`'>分类</a></span>
						<span><a href='`+e+`'>资讯</a></span>
					</div>
					<div id="navigationBarInput">
						<input  type="text"/><button><img src="`+inputImg+`"/></button>
					</div>
					<div id="navigationBarUser">
						<img id="navigationBarUser-userImg" src="`+userImg+`" >
						<div id="navigationBarUser-text">
							<span><a>书架</a></span>
							<span><a>历史</a></span>
							<span><a>下载app</a></span>
						</div>
					</div>
				</div>`			
			}	
		}
	})
}
//a:代表首页地址
//b:代表更新页地址
//c:代表排行页地址
//d:代表分类页地址
//e:代表资讯页地址
function navigationBar(){
	return new Vue({
		el:'#navigationBar',
		components:{
			'navigationBar':{
					template:`	<div id="navigations" style="z-index: 999;">
				<div id="navigationBarImg">
					<img src="./navigationBar/img/logo-kmh.png" />
				</div>
				<div id="navigationBarText">
					<span><a href='#'>首页</a></span>
					<span><a href='#'>更新</a></span>
					<span><a href='#'>排行</a></span>
					<span><a href='#'>分类</a></span>
					<span><a href='#'>资讯</a></span>
				</div>
				<div id="navigationBarInput">
					<input  type="text"/><button><img src="./navigationBar/img/QQ截图20200908215548.png"/></button>
				</div>
				<div id="navigationBarUser">
					<img id="navigationBarUser-userImg" src="./navigationBar/img/visitor.png" >
					<div id="navigationBarUser-text">
						<span><a href="#">书架</a></span>
						<span><a href="#">历史</a></span>
						<span id="navigationBarUser-text-span"><a href=""><span ></span>下载app</a></span>
					</div>
				</div>
			</div>`			
			}	
		}
	})
}
//a:代表首页地址
//b:代表更新页地址
//c:代表排行页地址
//d:代表分类页地址
//e:代表资讯页地址
function navigationBar(){
	return new Vue({
		el:'#navigationBar',
		data:{
			popupOne:false,
			popupTwoer:false,
			popupSiriy:false,
			user:{
				name:'游客',
				diamonds:0,
				goldsCoin:0,
				monthly :0,
				recommend:0,
				imgSrc:"./navigationBar/img/visitor.png",
				sign :false,
				books:null,
				look:null
			}
		},
		methods:{//方法
			hover(isShow,number){
				if(number==0){
					this.popupOne=isShow;
				}else if(number==1){
					this.popupTwoer=isShow
				}else{
					this.popupSiriy=isShow
				}
			}
		},
		computed:{//计算属性
			isBooks(){
				return this.user.books==null;
			},
			isLook(){
				return this.user.look==null;
			},
			popupOneStype(){
				if(this.popupOne){
					return "display: inline-block;right: 140px;"
				}else{
					return 'display: none;'
				}
			},
			popupTwoerStype(){
				if(this.popupTwoer){
					return "display: inline-block;	right: 115px;"
				}else{
					return 'display: none;'
				}
			},
			popupSiriyStype(){
				if(this.popupSiriy){
					return "display: inline-block;	right: 80px;"
				}else{
					return 'display: none;'
				}
			}
		},
		components:{
			'navigationBar':{
					template:`	`			
			}	
		}
	})
}
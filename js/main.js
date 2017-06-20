requirejs.config({
	paths:{
		jquery : "lib/jquery-2.1.4/jquery.min",
		ctrHead : "module/ctrHead",
		comment : "module/comment"
	}
})

requirejs(['jquery' , 'ctrHead' ,'comment'],function($ , ctrHead , comment){

	//幻灯片切换
	new ctrHead.CtrHead();

	//日记模块切换
	var comment_1 = new comment.Comment($(".cmt_L .cmt_ul li"),$(".cmt_L div"));
	var comment_2 = new comment.Comment($(".cmt_R .cmt_ul li"),$(".cmt_R div"));
})
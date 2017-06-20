define(['jquery'],function($){
	function Comment($alLi , $alCmt){
		this.pos = {
			$alLi : $alLi ,
			$alCmt : $alCmt
		}
		$alLi.on('mousemove',this.pos,this.mouser);
	}

	Comment.prototype.mouser = function(event){
		var $alLi = event.data.$alLi;
		var $alCmt = event.data.$alCmt;
		var index = $(this).index()
		for(var i =0;i<$alLi.length;i++){
			$alLi.eq(i).removeClass("cmt_current");
			$alCmt[i].style.display = "none";
		}
		$alLi.eq(index).addClass("cmt_current");
		$alCmt[index].style.display = "block";
	};

	return {
		Comment:Comment
	};
})
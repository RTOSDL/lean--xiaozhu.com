define(['jquery'] , function($){
	function CtrHead(){
		this.index = 0;
		this.$el = $(".back-img li");
		this.clearTime = setInterval($.proxy(this.bannerAnimate,this),3000);
		$(".pics_pre").on('click', $.proxy(this.picsPre,this));
		$(".pics_next").on('click', $.proxy(this.picsNext,this));
		$(window).on('resize', $.proxy(this.changeHeight,this));
	}

	CtrHead.prototype.bannerAnimate = function(){
		var a = this.index;
		this.index++;
		if(this.index >=this.$el.length){
			this.index=0;
		}
		this.$el.eq(this.index).fadeIn(1000);
		this.$el.eq(a).fadeOut(1000);
	};

	CtrHead.prototype.picsPre = function(){
		clearInterval(this.clearTime);
		var a = this.index;
		this.index--;	
		if(this.index<0){
			this.index = this.$el.length-1;
		}
		this.$el.eq(this.index).fadeIn(1000);
		this.$el.eq(a).fadeOut(1000);
		this.clearTime = setInterval($.proxy(this.bannerAnimate,this),3000);
	};
	CtrHead.prototype.picsNext = function(){
		clearInterval(this.clearTime);
		var a = this.index;
		this.index++;	
		if(this.index >= this.$el.length){
			this.index=0;
		}
		this.$el.eq(this.index).fadeIn(1000);
		this.$el.eq(a).fadeOut(1000);
		this.clearTime = setInterval($.proxy(this.bannerAnimate,this),3000);
	};

	CtrHead.prototype.changeHeight = function(){
		var bannerHeight = $(".back-img li :visible img").css("height");	
		if(bannerHeight != "0px"){
			$(".head_banner").css("height" , bannerHeight);
		}
	};
	
	CtrHead.prototype.changePosition = function(){
		var scrollHeight = $(window).scrollTop();
		// var windowHeight = $(window).height();
		var bannerHeight = $(".back-img li :visible img").css("height");
		bannerHeight = parseInt(bannerHeight) * 0.8;
		
		if(scrollHeight > bannerHeight){
			$('.search_index').css({
				'position' : 'fixed',
				'left' : '0px',
				'top' : '0',
				'z-index' : 99,
				'background' : '#A9A9A9'
			});
		}else{
			$('.search_index').css({
				'position' : 'absolute',
				'top' : '80%',
				'left' : '0px',
				'background' : 'none'
			});
		}
	};


	return {
		CtrHead : CtrHead
	};

})
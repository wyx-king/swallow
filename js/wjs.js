$(function(){
	  $('[data-toggle="tooltip"]').tooltip()
	//获取当前所有的item
	var items=$(".carousel-inner .item");
	//console.log(items);
	$(window).on("resize",function(){
		var width=$(window).width();
		//console.log(width);
		if(width>=768){
			//console.log("1"+$(this));
			//为每个item添加子元素
			$(items).each(function(index,value){
				var item=$(this);
				//console.log(item);
				//获取图片地址
				var imgSrc=item.data('largeImage');
//				console.log(imgSrc);
				item.html($('<a href="#" class="pcImg"></a>')).css("background-image","url('"+imgSrc+"')").css({"background-size":"cover","background-position":"center center"});
			});
			
		}else{
			$(items).each(function(index,value){
				var item=$(this);
				var imgSrc=item.data('smallImage');
				//console.log(imgSrc);
				item.html('<a href="#" class="mobileimg" ><img src="'+imgSrc+'"/></a>');
				//console.log(item.html());
			});
		}	
	}).trigger("resize");
	
//	添加移动端的滑动操作
	var startX,endX;
	var carousel_inner=$('.carousel-inner')[0];
//	获取当前轮播图
/*	var carousel=$(".carousel");
	
	carousel_inner.addEventListener("touchstart",function(e){
		startx=e.targetTouches[0],clientx;
	})
	carousel_inner.addEventListener("touchstart",function(e){
		endx=e.changedTouches[0].clientx;
		if(endx-startx>0){
			carousel.carousel('prev');
		}else if(endx-startx<0){
			carousel.carousel('next');
		}
	})*/
	
	var ul=$(".wjs_product .nav-tabs");
	var lis=ul.find("li");
	var totalWidth=0;
	lis.each(function(index,value){
		totalWidth+=$(value).innerWidth();
		
	});
	ul.width(totalWidth);
	var myScroll = new IScroll('.nav-parent',{scrollX:true,scrollY:false});
})


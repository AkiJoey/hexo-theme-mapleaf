
  
	//---------------------------------------------------------------------------------------------------
	//fancybox
	// var imgList = $(".recent-post-info  img").not('.no-fancybox');
	// if (imgList.length === 0) {
	//   imgList = $("#post-content img").not('.no-fancybox');
	// }
	
	// for (var i = 0; i < imgList.length; i++) {
	//   var $a = $(
	// 	'<a href="' +
	// 	  imgList[i].src +
	// 	  '" data-fancybox="group" data-caption="' +
	// 	  imgList[i].alt +
	// 	  '" class="fancybox"></a>'
	//   )
	//   var alt = imgList[i].alt
	//   var $wrap = $(imgList[i]).wrap($a)
	//   if (alt) {
	// 	$wrap.after('<div class="img-alt">' + alt + '</div>')
	//   }
	// }
	// $().fancybox({
	//   selector: "[data-fancybox]",
	//   loop: true,
	//   transitionEffect: "slide",
	//   protect: true,
	//   // wheel: false,
	//   buttons: ["slideShow", "fullScreen", "thumbs", "close"]
	// });
  
	// var galleryItem = $(".gallery-item");
	// var galleryList = [];
	// galleryItem.each(function (idx, elem) {
	//   galleryList.push({
	// 	src: $(elem).data("url"),
	// 	opts: {
	// 	  caption: $(elem).data("title")
	// 	}
	//   });
	// });
	// galleryItem.on("click", function () {
	//   $.fancybox.open(
	// 	galleryList, {
	// 	  loop: true,
	// 	  transitionEffect: "slide"
	// 	},
	// 	galleryItem.index(this)
	//   );
	//   return false;
  
	// });
  
	//--------------------------------------------------------------------------------------------------------
	//lazy懶加載
	//把img的src删除，添加data-src,用于lozad.js
	// var $img = $("#post img");
	// $img.addClass("lozad");
	// $img.each(function () {
	//   var src_link = $(this).attr("src");
	//   $(this).attr("data-src", src_link);
	//   $(this).removeAttr("src");
	// })
  
	// const observer = lozad(); // lazy loads elements with default selector as '.lozad'
	// observer.observe();
  
	//---------------------------------------------------------------------------------------------------------
	
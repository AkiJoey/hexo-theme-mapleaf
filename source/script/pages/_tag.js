// tags 隨機大小 顔色
var list = document.querySelectorAll(".tag-cloud .tag-cloud-tags a");

if ($(window).width() > 768) {
  Array.prototype.forEach.call(list, (item, index) => {
	item.style.fontSize = Math.floor(Math.random() * 20 + 15) + "px"; //15 ~ 35
	item.style.color =
	  "rgb(" +
	  Math.floor(Math.random() * 201) +
	  ", " +
	  Math.floor(Math.random() * 201) +
	  ", " +
	  Math.floor(Math.random() * 201) +
	  ")"; // 0,0,0 -> 200,200,200
  });
} else {
  Array.prototype.forEach.call(list, (item, index) => {
	item.style.fontSize = Math.floor(Math.random() * 13 + 15) + "px"; //15 ~ 28
	item.style.color =
	  "rgb(" +
	  Math.floor(Math.random() * 201) +
	  ", " +
	  Math.floor(Math.random() * 201) +
	  ", " +
	  Math.floor(Math.random() * 201) +
	  ")"; // 0,0,0 -> 200,200,200
  });
}

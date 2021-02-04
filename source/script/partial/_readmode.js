//閲讀模式
$("#readmode").click(function () {

  if (Cookies.get("night-mode") == "night") {
    $('body').toggleClass('night-mode');
    $('body').toggleClass('read-mode');
    $('#font_plus,#font_minus').toggleClass('is_visible');

  } else {
    $('body').toggleClass('read-mode');
    $('#font_plus,#font_minus').toggleClass('is_visible');
  }

});


//閲讀模式下字體調整
$("#font_plus").click(function () {
  var font_size_record = parseFloat($('body').css('font-size'))
  $('body').css('font-size', font_size_record + 1)
});

$("#font_minus").click(function () {
  var font_size_record = parseFloat($('body').css('font-size'))
  $('body').css('font-size', font_size_record - 1)
});

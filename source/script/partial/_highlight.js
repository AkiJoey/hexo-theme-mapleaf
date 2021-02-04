//代碼框雙擊全屏
$('figure').on('dblclick', function (e) {
  if (e.target !== this)
    return;
  $(this).toggleClass('code_full_page');
  $('body').toggleClass('code_body');
});


//-------------------------------------------------------------------------------------------------------
//代码copy
// Add copy icon

var highlight_copy = GLOBAL_CONFIG.highlight_copy
if (highlight_copy == 'true') {
  $('figure.highlight').wrap('<div class="code-area-wrap"></div>')
  var $copyIcon = $('<i class="fa fa-clipboard" aria-hidden="true"></i>')
  var $notice = $('<div class="copy-notice"></div>')
  $('.code-area-wrap').prepend($copyIcon)
  $('.code-area-wrap').prepend($notice)
  // copy function
  function copy(text, ctx) {
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      try {
        document.execCommand('copy') // Security exception may be thrown by some browsers.
        $(ctx).prev('.copy-notice')
          .text(GLOBAL_CONFIG.copy.success)
          .animate({
            opacity: 1,
            right: 30
          }, 450, function () {
            setTimeout(function () {
              $(ctx).prev('.copy-notice').animate({
                opacity: 0,
                right: 0
              }, 650)
            }, 400)
          })
      } catch (ex) {
        $(ctx).prev('.copy-notice')
          .text(GLOBAL_CONFIG.copy.error)
          .animate({
            opacity: 1,
            right: 30
          }, 650, function () {
            setTimeout(function () {
              $(ctx).prev('.copy-notice').animate({
                opacity: 0,
                right: 0
              }, 650)
            }, 400)
          })
        return false
      }
    } else {
      $(ctx).prev('.copy-notice').text(GLOBAL_CONFIG.copy.noSupport)
    }
  }
  // click events
  $('.code-area-wrap .fa-clipboard').on('click', function () {
    var selection = window.getSelection()
    var range = document.createRange()
    range.selectNodeContents($(this).siblings('figure').find('.code pre')[0])
    selection.removeAllRanges()
    selection.addRange(range)
    var text = selection.toString()
    copy(text, this)
    selection.removeAllRanges()
  })
}

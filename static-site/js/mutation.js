(function ($) {
  'use strict';

  // finds a strong elem inside parent and sets it's text to msg
  window.setMessage = function setMessage($parent, msg) {
    $parent.addClass('mutated');
    $parent.find('strong').text(msg);
  };

  var $para = $('p');
  window.setMessage($para, 'MUTATED');
  $para.append($('<img>', {src: 'images/toxie.jpg'}));

})(jQuery);
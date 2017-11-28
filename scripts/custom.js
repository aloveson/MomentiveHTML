// $(window).resize(function() {
//   var more = document.getElementById("js-navigation-more");
//   if ($(more).length > 0) {
//     var windowWidth = $(window).width();
//     var moreLeftSideToPageLeftSide = $(more).offset().left;
//     var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;
//
//     if (moreLeftSideToPageRightSide < 330) {
//       $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
//       $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
//     }
//
//     if (moreLeftSideToPageRightSide > 330) {
//       $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
//       $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
//     }
//   }
// });
//
// $(document).ready(function() {
//   var menuToggle = $("#js-mobile-menu").unbind();
//   $("#js-navigation-menu").removeClass("show");
//
//   menuToggle.on("click", function(e) {
//     e.preventDefault();
//     $("#js-navigation-menu").slideToggle(function(){
//       if($("#js-navigation-menu").is(":hidden")) {
//         $("#js-navigation-menu").removeAttr("style");
//       }
//     });
//   });
// });



(function($) {

  // var headerHgt = $('header').height();
  // console.log(headerHgt);

  $.fn.itemPopover = function() {
    $(this).popover({
      html: true,
      placement: 'top',
      trigger: 'hover',
      delay: {show: 400, hide: 100}
    });
  }//itemPopover end

  $.fn.contentAreaHeight = function() {
    var otherHgt = $(this).css('marginBottom').replace(/[^-\d\.]/g, '');
    var bodyHgt = $(window).outerHeight();
    var elemHgt = $('header').outerHeight() + $('footer').outerHeight();
    //var footerHgt = ;
    var contentBoxHgt = bodyHgt - elemHgt - otherHgt;
    $(this).css('max-height',contentBoxHgt);
    console.log(contentBoxHgt);
    console.log(bodyHgt);
    console.log(otherHgt);
    //console.log(footerHgt);
  }//contentAreaHeight end


})( jQuery );
//Functions end

$(document).ready(function (){
  $('.collapse p').itemPopover();
  $('.maincontent').contentAreaHeight();
  //contentAreaHeight();
})

//document end

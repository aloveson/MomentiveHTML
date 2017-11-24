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

var tablePadTop;
    (function($) {

      $.fn.itemPopover = function() {
        $(this).popover({
          html: true,
          placement: 'top',
          trigger: 'hover',
          delay: {show: 400, hide: 100}
        });
      }


      // $.fn.loop = function(callback, thisArg) {
      //       var me = this;
      //       //return this.each(function(index, element) {
      //         $(this).addClass(function(index) {
      //              return 'itemRow' + (index + 1);
      //          });
      //       //});
      //   };

      $.fn.getDtableTopPadding = function(){
        // var getHgtone = $('h3').height();
        // var getClassName = $('h3').attr('class');
        // var getCount = $('h3').length;
        // $(this).addClass(function(index) {
        //     return 'itemRow' + (index + 1);
        // });

        //console.log(getHgtone);
        //console.log(this.className);
        //console.log(getCount);



        $(this).each(function() {
          $('.doa-data-table').css('display','none');
          var getTMarg = parseInt( $('.collapse .collapse p').css('marginTop')+ $('.collapse .collapse p').css('marginBottom'));
          // $('h4').on("click", function(){
          //
          //   setTimeout(function(){
          //     $('.doa-data-table').css('display','table')
          //     var lOneHeight = $('.collapse .collapse').position().top;
          //     var lTwoHeight = $('.doa-data-table tr th').innerHeight();
          //     var tdHeight = $('.collapse .collapse p').outerHeight();
          //     $('.doa-data-table').css('margin-top',lOneHeight - lTwoHeight);
          //     $('.doa-data-table tr td').css('height', tdHeight + getTMarg -1);
          //   },1000)
          //
          // });



            //$('.doa-data-table tr td').css('padding',getTMarg 0 getBMarg );
            //console.log(getBMarg)

          //  window.tabPadTop = tablePadTop;
            // $('h3', this).each(function() {
            //     if($(this).height() > lOneHeight) {
            //      lOneHeight = $(this).height();
            //     }
            //
            // });
            //
            //   $('h4', this).each(function() {
            //     $(this).addClass('hi');
            //       if($(this).innerHeight() > lTwoHeight) {
            //        lTwoHeight = $(this).innerHeight();
            //       }
            //   });
            //   tablePadTop = lOneHeight + lTwoHeight;
            //   //debugger;
            //   console.log(lOneHeight);
            //   console.log(lTwoHeight);
            //
            //
            // //console.log(lOneHeight);
            // //console.log(lTwoHeight);
            //
            // //console.log('element');
            // $('.doa-data-table').css('margin-top',tablePadTop);
            // //debugger;
            // console.log(tablePadTop);
            // return false;
        });


        //alert(tablePadTop);

      }



    })( jQuery );





$(document).ready(function (){

  //$('#clpsItemOne').show();
  //$('#clpsItemLevelOne').show();

  //$('.collapse p').itemPopover();
  //$('.treecollapse tr').getDtableTopPadding();
  //$('.treecollapse tr').loop();
})

//document end

/**  Top Scroll for Owner Table */

$(function(){
    $(".topScroll").scroll(function(){
        $(".tableOwner").scrollLeft($(".topScroll").scrollLeft());
    });
    $(".tableOwner").scroll(function(){
        $(".topScroll").scrollLeft($(".tableOwner").scrollLeft());
    });
});

/** END Top Scroll for Owner Table  */


/** Owner table Photo Preview */
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
/** Owner table Photo Preview */

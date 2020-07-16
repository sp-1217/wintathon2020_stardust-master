// function hideLoader() {
//     $('#loading').hide();
// }

// $(window).ready(hideLoader);

// // Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
// setTimeout(hideLoader, 200 * 1000);


$(window).load(function() {
    setTimeout(function(){ $('.loading').fadeOut('slow'); }, 1000);
 })
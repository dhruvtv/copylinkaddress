var linkAddress = $('<input id="copylAddress" type="text" />', { css: { 'display': 'none' }});
$('body').append(linkAddress);

//console.log("Copyl loaded!");

$(function() {
    $('a').on({
        mouseenter: function() {
            if(window.getSelection().rangeCount == 0) {
                //console.log("Nothing is selected. Copyl kicks in.");
                linkAddress.val($(this).prop('href'));
                linkAddress.select();
                //console.log(linkAddress.val());
            } else {
                console.log("Something is already selected. Copyl backs out.");
            }
        },
        mouseleave: function() {
            //console.log("Leaving link.");
            if (linkAddress.val) {
                linkAddress.val(null);
                //console.log("Cleared Copyl");
                window.getSelection().removeAllRanges();
            }
        }
    });
});
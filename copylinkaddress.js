var linkAddress = $('<input id="copylAddress" type="text" />', { css: { 'display': 'none' }});
$('body').append(linkAddress);

//console.log("Copyl loaded!");

$(function() {
    $('a').on({
        mouseenter: function() {
            if(window.getSelection().toString()) {
                console.log("Something is already selected. Copyl backs out.");
            } else {
                console.log("Nothing is selected. Copyl kicks in.");
                linkAddress.val($(this).prop('href'));
                linkAddress.select();
                console.log("linkAddress: " + linkAddress.val());
            }
            console.log("Current Selection: " + window.getSelection().toString());
        },
        mouseleave: function() {
            console.log("Leaving link.");
            if (linkAddress.val()) {
                linkAddress.val(null);
                console.log("Cleared linkAddress");
                window.getSelection().removeAllRanges();
            }
            console.log("Current selection: " + window.getSelection().toString());
        }
    });
});
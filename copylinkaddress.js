var linkAddress = $('<input id="copylAddress" type="text" />');
$('body').append(linkAddress);
// 'Hidden' yet selectable
linkAddress.css({position: 'absolute', left:'-9999em'});

function clearLinkAddress() {
    if (linkAddress.val()) {
        linkAddress.val(null);
        console.log("Cleared linkAddress");
        window.getSelection().removeAllRanges();
    }
    console.log("Current selection: " + window.getSelection().toString());
}

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
            clearLinkAddress();
        }
    });

    // Clear linkAddress when user closes or moves away from the page
    window.onbeforeunload = clearLinkAddress();
});
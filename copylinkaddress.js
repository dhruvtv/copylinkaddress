var linkAddress = $('<span id="copylAddress" />');
$('body').append(linkAddress);
// 'Hidden' yet selectable
//linkAddress.css({position: 'absolute', left:'-9999em'});

copylLogging = false;

function selectElement(el) {
    var range = document.createRange();
    console.log(el[0]);
    range.selectNodeContents(el[0]);
    window.getSelection().addRange(range);
}

function clearLinkAddress() {
    if (linkAddress.text()) {
        linkAddress.text("");
        linkAddress.blur();
        if (copylLogging) {
            console.log("Cleared linkAddress");
        }
        window.getSelection().removeAllRanges();
    }
    if (copylLogging) {
        console.log("Current selection: " + window.getSelection().toString());
    }
}

$(function() {
    $('a').on({
        mouseenter: function() {
            if(window.getSelection().toString()) {
                if (copylLogging) {
                    console.log("Something is already selected. Copyl backs out.");
                }
            } else {
                if (copylLogging) {
                    console.log("Nothing is selected. Copyl kicks in.");
                }
                linkAddress.text($(this).prop('href'));
                selectElement(linkAddress);
                if (copylLogging) {
                    console.log("linkAddress: " + linkAddress.text());
                }
            }
            if (copylLogging) {
                console.log("Current Selection: " + window.getSelection().toString());
            }
        },
        mouseleave: function() {
            if (copylLogging) {
                console.log("Leaving link.");
            }
            clearLinkAddress();
        }
    });

    // Clear linkAddress when user closes or moves away from the page
    // Does not work in Chrome 14+
    window.onbeforeunload = function() {
        if (copylLogging) {
            console.log("Leaving page.");
        }
        clearLinkAddress();
    }
});
/*
The way the extension works is, once you hover a link:
If something is already selected in the page, it does nothing. Else, it
takes the URL of the link you are hovering, copies it to an invisible span,
programmatically selects the span.

Now when you hits Cmd-C (Ctrl-C), the hidden selection is copied to clipboard.

When you move pointer away from the link, it
clears the hidden selection, clears the invisible span.

If, at the time of hover, the cursor was in a textbox (without anything selected),
it is technically a zero-length selection in Chrome. So, the extension goes ahead and clears that selection
(thereby taking the cursor away from the textbox), saving the caret position.
When you move away from the link, the caret position is restored.

*/

var linkAddress = $('<span id="copylAddress" style="display: inline-block;" />');
$('body').append(linkAddress);
// This is a DOM element that has to be selectable but not visible to anybody
linkAddress.css({position: 'absolute', left:'-9999em'});

var previousCaretPosition = -1;

COPYL_DEBUG = false;

function write_to_console(text) {
    if (COPYL_DEBUG)
        console.log(text);
}

function selectElement(el) {
    // Check if anything is currently selected, if so backup
    if (window.getSelection().rangeCount > 0) {
        previousCaretPosition = document.activeElement.selectionStart;
    }
    write_to_console("Previous cursor position: " + previousCaretPosition);
    var range = document.createRange();

    write_to_console("Selecting element " + el);
    write_to_console("el[0] is " + el[0]);
    range.selectNodeContents(el[0]);
    write_to_console("Range: " + range);

    write_to_console("Window selection range count before: " + window.getSelection().rangeCount);
    if (window.getSelection().rangeCount > 0) {
        window.getSelection().removeAllRanges();
    }
    write_to_console("Window selection range count now: " + window.getSelection().rangeCount);

    write_to_console("Active Element: " + document.activeElement);
    window.getSelection().addRange(range);
    write_to_console("Window selection range count after: " + window.getSelection().rangeCount);
}

function clearLinkAddress() {
    if (linkAddress.text()) {
        linkAddress.text("");
        linkAddress.blur();
        write_to_console("Cleared linkAddress");

        write_to_console("window.getSelection: " + window.getSelection());
        window.getSelection().removeAllRanges();
    }
    if (previousCaretPosition != -1)
    {
        document.activeElement.selectionStart = previousCaretPosition;
        write_to_console("Previous cursor position set: " + document.activeElement.selectionStart);
    }

    write_to_console("Current selection: " + window.getSelection().toString());
}

$(function() {
    // The code attaches itself to all anchor elements
    $("html").on("mouseenter", "a", function(){
        // Everytime the user hovers (enters) a link
        if(window.getSelection().toString()) {
            write_to_console("Something is already selected. Don't do anything.");
        } else {
            write_to_console("Nothing is selected.");

            linkAddress.text($(this).prop('href'));
            write_to_console("linkAddress: " + linkAddress.text());
            selectElement(linkAddress);
        }

        write_to_console("Current Selection: " + window.getSelection().toString());
    }).on("mouseleave", "a", function(){
            // Every time the user leaves a link
            write_to_console("Leaving link.");
            clearLinkAddress();
        });

    $(window).on("beforeunload", function() {
        clearLinkAddress();
    });

});
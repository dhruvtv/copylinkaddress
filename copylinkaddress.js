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

let linkAddress = $('<span id="copylAddress" style="display: inline-block;" />')
$('body').append(linkAddress)
// This is a DOM element that has to be selectable but not visible to anybody
linkAddress.css({position: 'fixed', top: '0em', right: '-9999em'})

let previousCaretPosition = -1

function copyToClipboard () {
    selectElement(linkAddress)
    document.execCommand('Copy', false, null)
    if (linkAddress.text()) {
        iziToast.show({
            color: 'dark',
            icon: 'icon-contacts',
            title: '⚠️ Copied　',
            position: 'topCenter',
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            progressBarColor: 'rgb(0, 255, 184)',
            imageWidth: 5,
            layout:2,
            timeout: 2000,
            progressBar: true,
            iconColor: 'rgb(0, 255, 184)'
        });
    }
}

function selectElement(el) {
    // Check if anything is currently selected, if so backup
    if (window.getSelection().rangeCount > 0) {
        previousCaretPosition = document.activeElement.selectionStart
    }
    let range = document.createRange()

    range.selectNodeContents(el[0])

    if (window.getSelection().rangeCount > 0) {
        window.getSelection().removeAllRanges()
    }

    window.getSelection().addRange(range)
}

function clearLinkAddress() {
    selectElement(linkAddress)
    if (linkAddress.text()) {
        linkAddress.text("")
        linkAddress.blur()
        window.getSelection().removeAllRanges()
    }
    if (previousCaretPosition !== -1) {
        document.activeElement.selectionStart = previousCaretPosition
    }
}

$(function () {
    iziToast.settings({
        timeout: 500,
        pauseOnHover: true,
        close: false,
        progressBar: false
    });

    // The code attaches itself to all anchor elements
    $("html").on("keydown", function (e) {
        if (e.keyCode === 67 && (e.ctrlKey || e.metaKey)){
            let inputIdx = -1
            let activeElement = document.activeElement
            let focusInput = activeElement.tagName === "INPUT"
            if (focusInput) {
                inputIdx = activeElement.selectionStart
            }
            if (!window.getSelection().toString()) {
                copyToClipboard()
            }
            if (focusInput && inputIdx > -1) {
                activeElement.selectionStart = inputIdx
            }
            activeElement.focus()
        }
    }).on("mouseenter", "a", function () {
        // Everytime the user hovers (enters) a link
        if (!window.getSelection().toString()) {
            let targetHref = $(this).prop('href')
            $('body').append(linkAddress)
            if (targetHref.startsWith("http") || targetHref.startsWith("javascript")) {
                linkAddress.css({position: 'fixed', top: '0em', right: '-9999em'})
            } else {
                // linkAddress.css({position: 'fixed', top: '0em', right: '0em'})
                if (targetHref) {
                    iziToast.show({
                        color: 'dark',
                        icon: 'icon-contacts',
                        title: targetHref.length > 100 ? targetHref.substring(0, 100) : targetHref,
                        position: 'topCenter',
                        transitionIn: 'flipInX',
                        transitionOut: 'flipOutX',
                        progressBarColor: 'rgb(0, 255, 184)',
                        imageWidth: 5,
                        layout:2,
                        timeout: 2000,
                        progressBar: true,
                        iconColor: 'rgb(0, 255, 184)'
                    });
                }
            }
            linkAddress.text(targetHref)
        }
    }).on("mouseleave", "a", function () {
        // Every time the user leaves a link
        clearLinkAddress()
    })

    $(window).on("beforeunload", function () {
        clearLinkAddress()
    })

})
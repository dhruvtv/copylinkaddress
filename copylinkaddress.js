/*
When the user hovers over a link and presses Cmd-C (Ctrl-C),
the link's URL is copied to the clipboard.

If text is already selected on the page, it does nothing,
so the user can copy the selected text as usual.
*/

document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'c' && !window.getSelection().toString()) {
        const link = document.querySelector('a[href]:hover');
        if (link) navigator.clipboard.writeText(link.href);
    }
});

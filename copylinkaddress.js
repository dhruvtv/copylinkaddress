/*
When the user hovers over a link and presses Cmd-C (Ctrl-C),
the link's URL is copied to the clipboard.

If text is already selected on the page, it does nothing,
so the user can copy the selected text as usual.
*/

let hoveredLink = null;

document.addEventListener('mouseenter', (e) => {
    const link = e.target.closest('a');
    if (link) hoveredLink = link;
}, true);

document.addEventListener('mouseleave', (e) => {
    const link = e.target.closest('a');
    if (link) hoveredLink = null;
}, true);

document.addEventListener('keydown', (e) => {
    if (hoveredLink && (e.metaKey || e.ctrlKey) && e.key === 'c' && !window.getSelection().toString()) {
        navigator.clipboard.writeText(hoveredLink.href);
    }
});

### Use Chrome? Copy link address without right-clicking! Just use your standard keyboard shortcut!

If you need to copy link addresses more than once, you know how annoying it is.
You need to right-click, find the "Copy Link Address" menu item, and click it.

This extension makes your life easy. Just point to your link and hit your standard keyboard shortcut
(Ctrl-C, or Cmd-C for Mac) and you're done!

Download it at the [Chrome Web Store](https://chrome.google.com/webstore/detail/kdejdkdjdoabfihpcjmgjebcpfbhepmh)

To try the latest dev version of the extension,

1. Download the source (hit the 'ZIP' button you see at the top of the page) and extract to a directory
2. In Chrome, launch chrome://extensions
3. Enable Developer Mode
4. Click 'Load Unpacked Extensions' and point to the above directory.
5. Start using it!


### Known Issue:

The extension doesn't accurately work with dynamically generated links in some sites,
due to a jQuery/Chrome issue.

A prominent example is the Google home page (www.google.com). Here is a workaround:

1. Perform a Google search.
2. Once the search results are displayed, navigate to Image search (by clicking 'Images' on top).
3. Navigate back to regular search, and the extension now works.

(To spot the pages it won't work, look for the warning
"Resource interpreted as <something> but transferred with MIME type <something else>"
in the Chrome Javascript console.)
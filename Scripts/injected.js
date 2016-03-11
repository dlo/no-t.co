var observer = new MutationObserver(function(mutations) {
    replaceLinks();
});

function replaceLinks() {
    var links = document.querySelectorAll(".tweet-text a");
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var expandedURL;
        if ((expandedURL = link.getAttribute('data-expanded-url'))) {
            link.href = expandedURL;
        } else if ((expandedURL = link.getAttribute('data-full-url'))) {
            link.href = expandedURL;
        }
    }
}

var interval = setInterval(function() {
    replaceLinks()
}, 25);

document.addEventListener("DOMContentLoaded", function(e) {
    clearInterval(interval);

    replaceLinks();

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
});


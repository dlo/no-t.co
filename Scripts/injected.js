var observer = new MutationObserver(function(mutations) {
    replaceLinks();
});

function replaceLinks() {
    var links = document.querySelectorAll(".tweet-text a");
    for (i in links) {
        var link = links[i];
        if (link && link.getAttribute) {
            var expandedURL = link.getAttribute('data-expanded-url');
            if (expandedURL) {
                links[i].href = expandedURL
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    replaceLinks();

    var target = document.querySelector(".stream-items");
    if (target !== null) {
        observer.observe(target, {
            childList: true,
            subtree: false,
            attributes: false,
            characterData: false
        });
    }
});


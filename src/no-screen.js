!function () {
    var hasRender = false,
        doc = document,
        win = window,
        oldError = win.onerror,
        timeouter,
        container = doc.querySelector('[need-render]');

    function observe(container) {
        var MO = win['WebkitMutationObserver'] || win['MutationObserver'];
        // observe container render
        if (MO) {
            (new MO(function () {
                hasRender = true;
            })).observe(container, {
                childList: true
            });
        } else {
            // IE 9+
            container.addEventListener('DOMNodeInserted', function () {
                hasRender = true;
            });
        }
    }

    function check(e) {
        clearTimeout(timeouter);
        !hasRender &&
            console.error('[Render error] ' + navigator.userAgent + (e ? ', ' + e : ''));
    }

    if (container) {
        observe(container);

        // error checking
        win.onerror = function (e) {
            check(e);
            oldError && oldError.apply(this, arguments);
            win.onerror = oldError;
        };

        // 30s checking
        timeouter = setTimeout(check, 3000);
    }
}();
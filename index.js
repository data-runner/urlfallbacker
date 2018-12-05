module.exports = function openUrlWithFallback(url, fallbackUrl) {
    if(url != null && fallbackUrl != null && typeof url == "string" && typeof fallbackUrl == "string") {
        window.location = url;
        // Mobile detection
        var now = Date.now();
        var localAppInstallTimeout = window.setTimeout(function () {
            if (Date.now() - now > 1250) return;
            window.location = fallbackUrl;
        }, 1000);

        // Desktop detection
        window.addEventListener('blur', function () {
            window.clearTimeout(localAppInstallTimeout);
        });
    } else {
        return false;
    }
};
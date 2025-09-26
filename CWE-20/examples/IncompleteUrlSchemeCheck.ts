//{fact rule=improper-input-validationt@v1.0 defects=1}

function sanitizeUrl(url: string) {
    let u = decodeURI(url).trim().toLowerCase();
    if (u.startsWith("javascript:"))
        return "about:blank";
    return url;
}

//{/fact}

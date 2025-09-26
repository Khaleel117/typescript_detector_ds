//{fact rule=method-input-validation@v1.0 defects=0}

app.get('/some/path', function(req: { param: (arg0: string) => any; }, res: { redirect: (arg0: any) => void; }) {
    let url = req.param('url'),
        host = urlLib.parse(url).host;
    // GOOD: the host of `url` can not be controlled by an attacker
    let allowedHosts = [
        'example.com',
        'beta.example.com',
        'www.example.com'
    ];
    if (allowedHosts.includes(host)) {
        res.redirect(url);
    }
});


//{/fact}
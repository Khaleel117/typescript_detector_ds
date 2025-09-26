//{fact rule=open-redirect@v1.0 defects=1}

app.get('/some/path', function(req: { param: (arg0: string) => any; }, res: { redirect: (arg0: any) => void; }) {
    let url = req.param("url");
    // BAD: the host of `url` may be controlled by an attacker
    if (url.includes("example.com")) {
        res.redirect(url);
    }
});


//{/fact}

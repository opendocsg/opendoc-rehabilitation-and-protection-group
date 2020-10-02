(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/opendoc-rehabilitation-and-protection-group/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["User Guide",null,["main.md"]]
            },
            
        
        
        {
                name: "main.md",
                title: "User Guide",
                url: "/opendoc-rehabilitation-and-protection-group/main.html",
                escapedPath: "main.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["User Guide",null,["main.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()
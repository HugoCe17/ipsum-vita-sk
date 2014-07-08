"use strict";

//Disable workers to avoid cross-oriding issue
PDFJS.disableWorker = true;
PDFJS.getDocument('PDF/Resume2014.pdf').then(function getPDFResume(pdf) {
    //
    // Fetch first Page
    //
    pdf.getPage(1).then(function getPageResume(page) {
        var scale = 1;
        var viewport = page.getViewport(scale);
        //
        // Prepare canvast using PDF page dimensions
        //
        var canvas = document.getElementById('pdf-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        //
        // Render PDG page into canvas context
        //
        page.render({
            canvasContext: context,
            viewport: viewport
        });
    });
});

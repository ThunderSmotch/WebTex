function loadTestFile(file){
    jQuery.get('./webtex/'+ file +'.webtex', function(data) {
        data = parseWebtex(data);
        $("#main")[0].innerHTML=data;
        MathJax.typeset();
    });
}

function convertWebTex2HTML(){
    var files = $('#file1').prop('files');
    var zip = new JSZip();

    for(i = 0; i < files.length; i++){
        await files[i].text().then(text => zip.file(files[i].name, parseWebtex(text)))
    }

    //Download ZIP
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "convertedFiles.zip");
    });

}
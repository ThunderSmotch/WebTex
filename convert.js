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
        var convertedText = '';
        files[i].text().then(text => convertedText=parseWebtex(text) )
        console.log(convertedText)
        zip.file(files[i].name, convertedText);
    }

    //Download ZIP
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "convertedFiles.zip");
    });

}
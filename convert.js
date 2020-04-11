function loadTestFile(file){
    jQuery.get('./webtex/'+ file +'.webtex', function(data) {
        data = parseWebtex(data);
        $("#main")[0].innerHTML=data;
        MathJax.typeset();
    });
}

function convertWebTex2HTML(){
    var files = $('#file1').prop('files');
    var convertedFiles = [];
    for(i = 0; i < files.length; i++){
        console.log(files[i]);
        files[i].text().then(text => convertedFiles.push(parseWebtex(text)))
    }

    console.log(convertedFiles);
}
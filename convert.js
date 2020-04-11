function loadTestFile(file){
    jQuery.get('./webtex/'+ file +'.webtex', function(data) {
        data = parseWebtex(data);
        $("#main")[0].innerHTML=data;
        MathJax.typeset();
    });
}

function convertWebTex2HTML(){
    var files = $('#file1').prop('files');

    files.forEach(file => {
        console.log(file);
    });
}
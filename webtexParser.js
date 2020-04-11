function parseWebtex(data){
    
    data = replaceSpoiler(data);

    return data;
}

//Replaces \begin{spoiler}[info] with the details HTML tag using the power of Regex
function replaceSpoiler(data){
    var str = data.replace(/\\begin{spoiler}\[(.+)\][\s\r\n]+([\s\S]*?)\\end{spoiler}/g, 
        function (match, p1, p2){
            return `
            <details>
            <summary>${p1}</summary>
            <div>${p2}</div>
            </details>
            `;
        }
    );
    return str;
}
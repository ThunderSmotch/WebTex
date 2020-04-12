<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.3.0/jszip.min.js"></script>
<script src="./webtexParser.js"></script>
<script src="./convert.js"></script>

# Online Text Converter

<span>Input text below to see the changes:</span>
<div style='display:inline-block;'>
<textarea style='float:left;' id="textarea1" rows="20" cols="35">
\section{Test File}

$$E = mc^3$$


\( ola \) 

\subsection{Test Spoiler}

\begin{spoiler}[Test \( x^{2} \)]
    \[ x^{3} \]  
\end{spoiler}

\begin{spoiler}[Test 2] 
pppp
\end{spoiler}
</textarea>

<textarea id="textarea2" style='float:left;' rows="20" cols="35" readonly>
</textarea> 
</div>

<button onClick='convertWebTex2HTMLTextArea();'>Convert and Download</button>

# Convert WebTex files to HTML

<label for="file1">Select a file:</label>
<input type="file" id="file1" name="file1" multiple> 

<button onClick='convertWebTex2HTML();'>Convert and Download</button>

# Convert HTML back to WebTex
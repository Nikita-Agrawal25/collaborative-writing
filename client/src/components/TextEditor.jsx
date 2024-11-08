import {useCallback, useState,useEffect} from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css';
import Quill from 'quill'
import "quill/dist/quill.snow.css" 
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';


window.hljs = hljs;

function TextEditor() {
    const [quill, setQuill] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState('javascript')
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        const q = new Quill(editor, { 
            theme: "snow",
            modules: {
                toolbar: [
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 
                     {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean'],
                    [{ 'code-block': ['javascript', 'python', 'html', 'css'] }]
                ],
                syntax: {
                    hljs
                }
            }    
        })
        setQuill(q)
    }, [])

    useEffect(() => {
        if (quill == null) return
        quill.on('text-change', () => {
            document.querySelectorAll('pre').forEach(pre => {
                if (!pre.hasAttribute('data-codemirror')) {
                    const code = pre.querySelector('code');
                    const codeMirrorInstance = CodeMirror(function (elt) {
                        pre.replaceChild(elt, code);
                    }, {
                        value: code ? code.textContent : '',
                        mode: selectedLanguage,
                        lineNumbers: true,
                        lineWrapping: true,
                        indentUnit: 4,
                    });
                    pre.setAttribute('data-codemirror', 'true');
                }
            });
        });

        const toolbar = quill.getModule('toolbar');
        toolbar.addHandler('code-block', (value) => {
            setSelectedLanguage(value); // Update selected language
        });
    }, [])

    return (
        <div id="container" ref={wrapperRef}></div>
    )
}

export default TextEditor
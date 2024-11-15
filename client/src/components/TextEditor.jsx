import {useCallback, useState,useEffect} from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css';
import Quill from 'quill'
import "quill/dist/quill.snow.css" 
// import texteditor.css
import '../css/texteditor.css'



window.hljs = hljs;

function TextEditor() {
    const [quill, setQuill] = useState()
    const [selectedLanguage, setSelectedLanguage] = useState('javascript')
    const [isToolbarVisible, setToolbarVisible] = useState(false);
    

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
                ],
            }    
        })
        setQuill(q)
    }, [])

    const toggleToolbar = () => {
        setToolbarVisible((prev) => !prev);

        // Directly manipulate toolbar visibility
        const toolbar = document.querySelector('.ql-toolbar');
        if (toolbar) {
            toolbar.style.display = isToolbarVisible ? 'none' : 'flex';
        }
    };

    return (
        <>
            <button id="toggle-toolbar-btn" onClick={toggleToolbar}>
                {isToolbarVisible ? 'Hide Toolbar' : 'Show Toolbar'}
            </button>
            <div id="container" ref={wrapperRef}></div>
        </>
        
    )
}

export default TextEditor
import {React, useState, useRef} from 'react'
import Editor from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';

import '../css/codeEditor.css';

function CodeEditor(content, onChange) {
    const editorRef = useRef();
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language);
    }



    return (
        <>
            <LanguageSelector language={language} onSelect={onSelect}/>
            <Editor 
            className='editor'
            height="50vh"
            width="50vw"
            theme='vs-dark' 
            language={language}
            defaultValue="// some comment" 
            value = {code}
            omMount={onMount}
            onChange={(value) => setCode(value)}
            />;
        </>
    )
}

export default CodeEditor
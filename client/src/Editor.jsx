import {React, useState} from 'react'
import CodeEditor from './components/CodeEditor'
import TextEditor from './components/TextEditor'

function Editor() {
    const [components, setComponents] = useState([]);

    const addTextEditor = () => {
        setComponents([...components, { type: 'TextEditor', content: '' }]);
    };

    const addCodeEditor = () => {
        setComponents([...components, { type: 'CodeEditor', content: '' }]);
    };

    const handleContentChange = (index, content) => {
        const newComponents = [...components];
        newComponents[index].content = content;
        setComponents(newComponents);
    };

  return (
    <>
        <button onClick={addTextEditor}>Add Text Editor</button>
        <button onClick={addCodeEditor}>Add Code Editor</button>
        <div>
                {components.map((component, index) => {
                    if (component.type === 'TextEditor') {
                        return (
                            <TextEditor
                                key={index}
                                content={component.content}
                                onChange={(content) => handleContentChange(index, content)}
                            />
                        );
                    } else if (component.type === 'CodeEditor') {
                        return (
                            <CodeEditor
                                key={index}
                                content={component.content}
                                onChange={(content) => handleContentChange(index, content)}
                            />
                        );
                    }
                    return null;
                })}
            </div>
    </>
  )
}

export default Editor
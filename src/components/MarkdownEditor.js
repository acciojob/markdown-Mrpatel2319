import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown"; // To render markdown content as HTML

function MarkdownEditor({ markdownText, setMarkdownText }) {

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  useEffect(() => {
  }, [markdownText]);

  return (
    <div className="editor-container">
      {/* Markdown Input Area */}
      <div className="input-area">
        <h2>Write Markdown</h2>
        <textarea
          className="textarea"
          value={markdownText}
          onChange={handleChange} 
          placeholder="Write your Markdown here..."
        />
      </div>

      {/* Live Preview Section */}
      <div className="preview-area">
        <h2>Preview</h2>
        <div className="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;

import React, { useState, useEffect } from 'react';
import marked from 'marked'; // Markdown parsing library

function MarkdownEditor() {
  // State for managing Markdown input
  const [markdownText, setMarkdownText] = useState('');
  
  // State for rendered HTML preview
  const [htmlPreview, setHtmlPreview] = useState('');

  // UseEffect to convert Markdown to HTML in real-time
  useEffect(() => {
    // Configure marked library options if needed
    marked.setOptions({
      breaks: true,
      gfm: true,
    });

    // Convert Markdown to HTML
    const html = markdownText 
      ? marked.parse(markdownText) 
      : '<p>Start typing Markdown here...</p>';
    
    setHtmlPreview(html);
  }, [markdownText]);

  // Handler for textarea input changes
  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="markdown-editor">
      <div className="editor-container">
        {/* Markdown Input Area */}
        <textarea 
          className="textarea"
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Enter Markdown text here..."
          rows={20}
        />

        {/* Markdown Preview Area */}
        <div 
          className="preview"
          dangerouslySetInnerHTML={{ __html: htmlPreview }}
        />
      </div>
    </div>
  );
}

export default MarkdownEditor;

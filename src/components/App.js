import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor"; // Import the MarkdownEditor component
import "./App.css"; // Import the styles

function App() {
  // State to store the Markdown text input
  const [markdownText, setMarkdownText] = useState("");

  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      <MarkdownEditor markdownText={markdownText} setMarkdownText={setMarkdownText} />
    </div>
  );
}

export default App;

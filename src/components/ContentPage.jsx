import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function ContentPage({ title, markdownPath }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Dynamically import the markdown file content
    fetch(markdownPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => setMarkdown(text))
      .catch(error => {
        console.error("Error fetching markdown:", error);
        setMarkdown(`## خطأ في تحميل المحتوى\n\nتعذر تحميل الملف: ${markdownPath}`);
      });
  }, [markdownPath]);

  return (
    <div className="content-page">
      <h2>{title}</h2>
      <div className="markdown-content tool-card">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ContentPage;

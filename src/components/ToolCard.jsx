import React from 'react';

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
      <p><strong>المجال:</strong> {tool.category}</p>
      <p><strong>النوع:</strong> {tool.type}</p>
      
      <h4>أبرز المميزات:</h4>
      <ul>
        {tool.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="btn-link">
        زيارة الموقع
      </a>
    </div>
  );
}

export default ToolCard;

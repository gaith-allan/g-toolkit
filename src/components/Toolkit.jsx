import React, { useState, useMemo } from 'react';
import ToolCard from './ToolCard';
import SearchFilter from './SearchFilter';
import { toolsData } from '../data/toolsData'; // الآن يحتوي على 600 أداة // Assuming toolsData is imported from here

function Toolkit() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories for the filter dropdown
  const categories = useMemo(() => {
    const allCategories = toolsData.map(tool => tool.category);
    return [...new Set(allCategories)].sort(); // Sort categories alphabetically
  }, []);

  // Filter and search logic
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="toolkit-page">
      <h2>دليل الأدوات الشامل</h2>
      
      <SearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <div className="tools-grid">
        {filteredTools.length > 0 ? (
          filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))
        ) : (
          <p className="no-results">لا توجد نتائج مطابقة لمعايير البحث.</p>
        )}
      </div>
    </div>
  );
}

export default Toolkit;

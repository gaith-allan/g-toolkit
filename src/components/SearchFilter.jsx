import React from 'react';

function SearchFilter({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="search-filter-container tool-card">
      <div className="search-input">
        <label htmlFor="search">البحث عن أداة:</label>
        <input
          id="search"
          type="text"
          placeholder="اكتب اسم الأداة أو كلمة مفتاحية..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="filter-select">
        <label htmlFor="category-filter">تصفية حسب المجال:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">جميع المجالات</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;

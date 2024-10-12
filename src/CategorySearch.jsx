import React, { useState } from 'react';
import './CategorySearch.css';

const CategorySearch = ({ category }) => {
  const [searchInput, setSearchInput] = useState('');

  // Example data for each category (You can replace this with actual data)
  const data = category === 'category1' ? [
    { main: 'Debargha Nandi', sub: 'Sub content for Debargha' },
    { main: 'Riya Nandi', sub: 'Sub content for Riya' },
    { main: 'Mukta Das', sub: 'Sub content for Mukta' }
  ] : category === 'category2' ? [
    { main: 'IFFCO', sub: 'Indian Farmers Fertiliser Cooperative' },
    { main: 'KRIBHCO', sub: 'Krishak Bharati Cooperative Limited' }
  ] : [
    { main: 'Green Agriculture', sub: 'Sustainable farming practices' },
    { main: 'Organic Farming', sub: 'Farming without synthetic chemicals' }
  ];

  const handleSearch = (event) => {
    setSearchInput(event.target.value.toLowerCase().replace(/\s+/g, ' ').trim());
  };

  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, (match) => `<span class="highlight-green">${match}</span>`);
  };

  return (
    <div className="search-container">
      <h2>{`Search in ${category}`}</h2>
      <input
        type="text"
        id="searchInput"
        onChange={handleSearch}
        placeholder="Search..."
      />

      <ul id="contentList">
        {data.filter(item => 
          item.main.toLowerCase().includes(searchInput) ||
          item.sub.toLowerCase().includes(searchInput)
        ).length > 0 ? (
          data.map((item, index) => {
            if (item.main.toLowerCase().includes(searchInput) || item.sub.toLowerCase().includes(searchInput)) {
              return (
                <li key={index}>
                  <div
                    className="main-content"
                    dangerouslySetInnerHTML={{ __html: highlightText(item.main, searchInput) }}
                  ></div>
                  <div
                    className="sub-content"
                    dangerouslySetInnerHTML={{ __html: highlightText(item.sub, searchInput) }}
                  ></div>
                </li>
              );
            }
            return null;
          })
        ) : (
          <p id="noResult">Nothing to show</p>
        )}
      </ul>
    </div>
  );
};

export default CategorySearch;

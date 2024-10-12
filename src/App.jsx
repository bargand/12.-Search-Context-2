import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import CategorySearch from './CategorySearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/category1" element={<CategorySearch category="category1" />} />
        <Route path="/search/category2" element={<CategorySearch category="category2" />} />
        <Route path="/search/category3" element={<CategorySearch category="category3" />} />
      </Routes>
    </Router>
  );
}

export default App;

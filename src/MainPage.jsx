import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <h1>Search Categories</h1>
      <div className="cards-container">
        <div className="card">
          <h3>Search Category 1</h3>
          <p>Explore and search content for Category 1.</p>
          <Link to="/search/category1">
            <button>Go to Category 1</button>
          </Link>
        </div>

        <div className="card">
          <h3>Search Category 2</h3>
          <p>Explore and search content for Category 2.</p>
          <Link to="/search/category2">
            <button>Go to Category 2</button>
          </Link>
        </div>

        <div className="card">
          <h3>Search Category 3</h3>
          <p>Explore and search content for Category 3.</p>
          <Link to="/search/category3">
            <button>Go to Category 3</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

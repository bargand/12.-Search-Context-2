
import { NavLink } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <h1>All Subjects</h1>
      <div className="cards-container">
        <div className="card">
          <h3>Genetics</h3>
          <NavLink to="/search/genetics">
            <button>Search</button>
          </NavLink>
        </div>

        <div className="card">
          <h3>Plant Breading</h3>
          <NavLink to="/search/plantbreeding">
            <button>Search</button>
          </NavLink>
        </div>

        <div className="card">
          <h3>Cytogenetics</h3>
          <NavLink to="/search/cytogenetics">
            <button>Search</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

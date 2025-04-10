import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0 });

  return (
    <div className="listPage">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Dates</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <div className="filter-section">
              <h2>Filter by:</h2>

              <div className="budget-filter">
                <h3>Your budget (whole trip)</h3>
                <div className="price-range">£50 - £300+</div>
                <div className="range-slider">
                  <div className="slider-track"></div>
                  <div className="slider-fill"></div>
                  <div className="slider-handle left"></div>
                  <div className="slider-handle right"></div>
                </div>
                <div className="price-histogram"></div>
              </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="popular-filters">
                  <h3>Difficulty</h3>
                  <div className="filter-option">
                    <input type="checkbox" id="easy" />
                    <label htmlFor="swimming-pool">Easy</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="moderate" />
                    <label htmlFor="4-stars">Moderate</label> 
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="strenous" />
                    <label htmlFor="twin-beds">Strenous</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="challenging" />
                    <label htmlFor="holiday-homes">Challenging</label>
                  </div>
                  <h3>Region</h3>
                  <div className="filter-option">
                    <input type="checkbox" id="everest" />
                    <label htmlFor="pets-allowed">Everest</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="annapurna" />
                    <label htmlFor="pets-allowed">Annapurna</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="Makalu" />
                    <label htmlFor="pets-allowed">Makalu</label>
                  </div>
                  <h3>Accommodation type</h3>
                  <div className="filter-option">
                    <input type="checkbox" id="teahouse" />
                    <label htmlFor="pets-allowed">Teahouse</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="camping" />
                    <label htmlFor="breakfast-included">Camping</label>
                  </div>
                  <h3>Group size</h3>
                  <div className="filter-option">
                    <input type="checkbox" id="small" />
                    <label htmlFor="pets-allowed">Small (up to 4)</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="camping" />
                    <label htmlFor="breakfast-included">Medium up to 8)</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="camping" />
                    <label htmlFor="breakfast-included">Large (up to 12)</label>
                  </div>
                  <h3>Extras</h3>
                  <div className="filter-option">
                    <input type="checkbox" id="porters" />
                    <label htmlFor="pets-allowed">Porters</label>
                  </div>
                  <div className="filter-option">
                    <input type="checkbox" id="meals included" />
                    <label htmlFor="breakfast-included">Meals included</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="results-section">
            <div className="sorting-section">
              <div className="sort-button">
                <span className="sort-icon">↑↓</span>
                Sort by:
                <select className="sort-select" onChange={(e) => console.log(e.target.value)}>
                  <option value="top-picks">Our top picks</option>
                  <option value="price-highest">Price (highest first)</option>
                  <option value="price-lowest">Price (lowest first)</option>
                  <option value="highly-rated">Highly rated</option>
                  <option value="top-reviewed">Top reviewed</option>
                </select>
              </div>
            </div>
            <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;

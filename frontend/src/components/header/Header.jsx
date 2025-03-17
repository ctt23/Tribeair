import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faPersonWalking, faPerson, faBox } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
    });

    const navigate = useNavigate()
    const dateRef = useRef(null);
    const optionsRef = useRef(null);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };

    const handleSearch = () => {
        navigate ("/trekking", {state:{ destination, date, options}});
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateRef.current && !dateRef.current.contains(event.target)) {
                setOpenDate(false);
            }
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setOpenOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faPersonWalking} />
                    <span>Treks</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBox} />
                    <span>Packages</span>
                </div>  
            </div>
            
            {type !=="list" && (
                <>
                    <h1 className="headerTitle">All guided treks in one place</h1>
                    <p className="headerDesc">
                       
                    </p>
               
                <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPersonWalking} className="headerIcon" />
                            <input
                                type = "text"
                                placeholder="Your trekking destination"
                                className="headerSearchInput"
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="headerSearchItem" ref={dateRef}>
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span 
                                onClick={() => setOpenDate(!openDate)} 
                                className={`headerSearchText ${date[0].startDate && date[0].endDate ? 'selected' : ''}`}
                            >
                                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                            </span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date" 
                                minDate={new Date()}
                            />}   
                        </div>
                        <div className="headerSearchItem" ref={optionsRef}>
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchTex">{`${options.adult} adult · ${options.children} children`} </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult (13 or above)</span>
                                        <div className="optionCounter">                                    
                                            <button 
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton" 
                                                onClick={()=>handleOption("adult", "d")}
                                                >
                                                    -
                                                </button>
                                            <span className="optionCoutnerNumber">{options.adult}</span>
                                            <button className="optionCounterButton"onClick={()=>handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">children</span>
                                            <div className="optionCounter">
                                                <button 
                                                disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={()=>handleOption("children", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCoutnerNumber">{options.children}</span>
                                                <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                        </div>
                        <div className="headerSearchItem">
                            <div className="headerBtn" onClick={handleSearch}>Search</div>
                        </div>                
                    </div>
                </> 
            )}       
        </div>
    </div>
  );
}
;
export default Header

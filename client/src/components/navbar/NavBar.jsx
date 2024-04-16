import {useState} from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
      <>
        <nav className='navResponsive bg-700 container p-3 fixed'>
                <div>
                    <svg width="100" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_57)">
                        <g clipPath="url(#clip1_1_57)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M45.2583 80L80.7417 45.575H80.7333C94.7167 32.0167 100.392 29.9583 127.058 29.9583H233.408L264.008 0H123.025C87.3333 0 77.2417 3.4 56.3083 24.1167L0 80H45.2583ZM127.7 34.7417H228.842L200.792 62.7917H128.225C114.925 62.7917 111.983 63.4167 105.383 70.0167L95.4 80H53.4333L84.4583 48.975C96.6417 36.8 100.842 34.7417 127.7 34.7417ZM320 0L239.783 80H190.175L270.175 0H320ZM267.183 77.4667C268.85 79.1583 270.95 80 273.475 80C276 80 278.075 79.1583 279.717 77.4833C281.358 75.8083 282.175 73.7333 282.175 71.2667C282.175 68.8 281.35 66.725 279.7 65.0333C278.05 63.3417 275.967 62.5 273.442 62.5C270.917 62.5 268.825 63.3417 267.167 65.0167C265.508 66.6917 264.675 68.7667 264.675 71.2333C264.675 73.7 265.508 75.775 267.183 77.4667ZM268.225 66.025C269.625 64.5917 271.358 63.875 273.425 63.875C275.5 63.875 277.233 64.5917 278.625 66.025C280.017 67.4583 280.717 69.2 280.717 71.25C280.717 73.3 280.017 75.0333 278.625 76.4583C277.225 77.8833 275.5 78.5917 273.425 78.5917C271.35 78.5917 269.617 77.875 268.225 76.4417C266.833 75.0083 266.133 73.275 266.133 71.2333C266.133 69.1917 266.833 67.4583 268.225 66.025ZM271.717 76.125V72.6917L271.725 72.7H273.683L275.342 76.1333H277.367L275.542 72.45C276.158 72.1667 276.592 71.8 276.85 71.3417C277.108 70.8833 277.233 70.1833 277.233 69.2417C277.233 68.3 276.917 67.5917 276.283 67.125C275.65 66.65 274.7 66.4167 273.442 66.4167H269.792V76.125H271.717ZM271.683 71.1833V67.9167H273.275C274.65 67.9167 275.333 68.4583 275.333 69.55C275.333 70.125 275.2 70.5417 274.933 70.8C274.675 71.0583 274.242 71.1833 273.642 71.1833H271.683Z" fill="white"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_57">
                        <rect width="320" height="80" fill="white"/>
                        </clipPath>
                        <clipPath id="clip1_1_57">
                        <rect width="320" height="80" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className={`nav_items ${showMenu && "nav_open"}`}>
                    <Link to="/drivers" className="linkNav text-color-50 mr-4 p-2 rounded-tr-lg">Drivers</Link>
                    <Link to="/teams" className="linkNav text-color-50 mr-4 p-2 rounded-tr-lg">Teams</Link>
                    <Link to="/createDrive" className="linkNav bg-900 text-color-50 p-2 rounded-tr-lg">Create New Driver</Link>
                </div>
                <button 
                    className='hamburguesaButton'
                    onClick={() => setShowMenu(!showMenu)}
                >
                    ☰
                </button>

        </nav>

      </>
    );
};

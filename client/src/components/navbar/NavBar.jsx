import { Link } from 'react-router-dom';


export const NavBar = () => {

    return (
      <>
        <nav className='bg-700 p-2'>
            <div className="flex justify-between text-color-50">
                <div>
                    <p>Logo</p>
                </div>

                <div className="text-xl font-medium">
                    <Link to="/drivers" className="linkNav text-color-50 mr-4 p-2 rounded-tr-lg">Drivers</Link>
                    <Link to="/teams" className="linkNav text-color-50 p-2 rounded-tr-lg">Teams</Link>
                </div>
                <div>
                    <input type="text" placeholder="Search" className="searchNav rounded-tr-lg mr-4" />
                </div>

                <button className='hidden'>
                    ☰
                </button>
            </div>
        </nav>

      </>
    );
};

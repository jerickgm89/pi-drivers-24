import { useNavigate } from 'react-router-dom';
export const HomePage = () => {

  const navigate = useNavigate();

  const onEnter = () => {
    navigate('/drivers', {
      replace: true
    });
  }
  return (
    <>  
        <div className="grid place-items-center min-h-screen bodyHome">
            <div className="p-20 border-900 rounded-tr-lg border-t-2 border-r-2 homeContainer">
                <h1 className="text-center pb-4 textHome"> Bienvenido a Formula One</h1>
                <button 
                  className="btn btn-outline w-full"
                  onClick={ onEnter }
                >
                Entrar
                </button>
            </div>
        </div>
    </>
  )
}


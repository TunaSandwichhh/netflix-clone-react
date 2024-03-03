import './App.css'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>

      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to={'/login'} className='navbar-brand'>
              <img src="./assets/IT-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Nettflix Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className='bg-danger rounded px-4'>
                    <Link to={'/login'} className='nav-link text-light fw-bolder'>Sign In</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className='bg-danger rounded px-4'>
                    <Link to={'/signup'} className='nav-link text-light fw-bolder'>Sign Up</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className='container hero'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-light fw-bolder'>Unlimited movies, TV shows, and more</h1>
          </div>
          <div className='col-12'>
            <h3 className='text-light fw-normal'>Watch anywhere. Cancel anytime.</h3>
          </div>
          <div className='col-12'>
            <h4 className='text-light fw-normal'>Ready to watch? Enter your email to create or restart your membership</h4>
          </div>
        </div>
      </div>


    </>
  )
}

export default App

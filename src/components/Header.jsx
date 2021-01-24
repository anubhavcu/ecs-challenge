import React from 'react';

const Header = ({ count }) => {
  return (
    // <div className='navbar navbar-dark bg-primary'>
    //   <h1>Book Depot!</h1>
    // </div>
    <section className='bg-primary text-center header mb-4 '>
      <div className='container'>
        <nav className='navbar navbar-dark bg-primary'>
          <a className='navbar-brand' href='.'>
            <strong>Book Depot !</strong>
          </a>
          <div>
            <a href='.' className='badge badge-primary m-2'>
              <button className='btn btn-dark btn-sm customHover'>
                <i className='fas fa-user'></i> Log in
              </button>
            </a>
            <a href='.'>
              <button className='btn btn-dark btn-sm customHover'>
                <i className='fas fa-shopping-cart'></i> Cart {'  '}
                <span className='badge badge-danger'>{count}</span>
              </button>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;

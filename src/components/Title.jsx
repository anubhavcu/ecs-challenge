import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export class Title extends Component {
  render() {
    return (
      <div className='container text-center bg-light mb-2'>
        <nav className='navbar'>
          <h3>Top selling books !</h3>
          <div className='bg-info'>
            <h4>
              Total Items:{' '}
              <span className='badge badge-danger '>{this.props.count}</span>
            </h4>
          </div>
          <button
            className='btn btn-warning customHover'
            onClick={this.props.handleReset}
          >
            Clear Cart
          </button>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={(event) => console.log(event)}>
                Highest Rated
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Lowest Rated</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Random</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <hr />
      </div>
    );
  }
}

export default Title;

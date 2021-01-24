import React, { Component } from 'react';
import Rating from './Rating';

export class SingleBook extends Component {
  handleIncrement() {
    console.log('increment clicked');
  }
  render() {
    const {
      title,
      average_rating,
      ratings_count,
      authors,
      price,
    } = this.props.pd;
    return (
      <div className='card my-3 p-3 rounded customHover'>
        <h4>{title}</h4>
        <footer class='blockquote-footer'>
          {' '}
          -By <cite title='Source Title'>{authors}</cite>
        </footer>{' '}
        <Rating value={average_rating} />
        <p>
          {/* <i style={{ color: '#f8e825' }} className='fas fa-star'></i> */}
          <span>
            {' '}
            {average_rating} from {ratings_count} reviews
          </span>
        </p>
        <div className='form-group '>
          <div style={{ float: 'right' }}>
            <button
              className='btn btn-secondary mr-2'
              // onClick={this.handleIncrement}
            >
              -
            </button>
            <span className='badge badge-primary'>{this.props.count}</span>
            <button
              className='btn btn-secondary ml-2'
              onClick={this.props.handleIncrement}
            >
              +
            </button>
          </div>
          <p>
            Price :<strong> ${price}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default SingleBook;

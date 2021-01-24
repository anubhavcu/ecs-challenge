// import React, { Component } from 'react';
// import ReactPaginate from 'react-paginate';

// export class Content extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       offset: 0,
//       data: [],
//       perPage: 10,
//       currentPage: 0,
//     };
//     this.handlePageClick = this.handlePageClick.bind(this);
//   }
//   receivedData() {
//     fetch(
//       `https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const slice = data.slice(
//           this.state.offset,
//           this.state.offset + this.state.perPage
//         );
//         const postData = slice.map((pd) => (
//           <React.Fragment>
//             <p>{pd.title}</p>
//             <p>{pd.rating}</p>
//           </React.Fragment>
//         ));
//         this.setState({
//           pageCount: Math.ceil(data.length / this.state.perPage),
//           postData,
//         });
//       });
//   }
//   handlePageClick(e) {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;
//     this.setState(
//       {
//         currentPage: selectedPage,
//         offset: offset,
//       },
//       () => {
//         this.receivedData();
//       }
//     );
//   }
//   render() {
//     return (
//       <div>
//         {this.state.postData}
//         <ReactPaginate
//           previousLabel={'prev'}
//           nextLabel={'next'}
//           breakLabel={'...'}
//           breakClassName={'break-me'}
//           pageCount={this.state.pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={this.handlePageClick}
//           containerClassName={'pagination'}
//           subContainerClassName={'pages pagination'}
//           activeClassName={'active'}
//         />
//       </div>
//     );
//   }
// }

// export default Content;
import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import SingleBook from './SingleBook';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`
    )
      .then((data) => data.json())
      .then((res) => {
        const slice = res.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((pd) => (
          <React.Fragment>
            {/* <p>{pd.title}</p> */}
            <SingleBook
              pd={pd}
              count={this.props.count}
              handleIncrement={this.props.handleIncrement}
            />
          </React.Fragment>
        ));

        this.setState({
          pageCount: Math.ceil(res.length / this.state.perPage),

          postData,
        });
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    return (
      <div className='container'>
        {this.state.postData}
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

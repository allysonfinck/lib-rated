

class SearchResult extends React.Component {
    constructor(props){
        super(props)
        this.setBookState = this.setBookState.bind(this)
        this.state={title:""}
    }


    setBookState(googleData){

        this.setState({title: googleData}, ()=>{
          console.log(this.state.title);
        })

    }


  render() {
    // console.log(this.props.googleBooks);
    return (
      <div className="card-container">
        {this.props.googleBooks.map((book, index)=>{
          return (
            <div className="col s12 m7">
              <h3 className="header">{book.volumeInfo.title}</h3>
              {book.volumeInfo.subtitle ? <h5>{book.volumeInfo.subtitle}</h5> : ''}
              <div className="card horizontal cardfave">
                <div className="card-image">
                  {(book.volumeInfo.imageLinks === undefined) ? <img src="../images/no-image.jpg" alt={book.volumeInfo.title} /> : <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <ul>
                      <li>Author: {book.volumeInfo.authors}</li>
                      <li>Publisher: {book.volumeInfo.publisher}</li>


         {book.volumeInfo.categories ? <li>Genre: {book.volumeInfo.categories[0]}  </li> : ""}


                      <li>Publish Date: {book.volumeInfo.publishedDate}</li>
                      <li>Google Rating: {book.volumeInfo.averageRating}</li>
                    </ul>
                    <p>{book.volumeInfo.description}</p>
                    <a
                        onClick = {()=>{
                            this.props.getNewBook(book.volumeInfo);
                            this.props.toggleState('libraryPageVisible', 'homePageVisible')
                            }
                        }

                        className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i>
                    </a>
                  </div>
                  <div className="card-action">
                    <a href={book.volumeInfo.canonicalVolumeLink}>Google</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

class Home extends React.Component {

  render() {
    return (
        <div>
              <section className="search">

                <form onSubmit={this.props.handleSubmit}>
                  <input onChange={this.props.handleChange} type="text" placeholder="Search Google Books"/>
                  <input className="btn waves-effect waves-light" type="submit" name="action" />
                </form>

                <SearchResult
                    queryBooks={()=>this.props.queryBooks(this.props.query)} googleBooks={this.props.googleBooks}
                    getNewBook = {this.props.getNewBook}
                    addBookDB={this.props.addBookDB}
                    toggleState={this.props.toggleState}
                 />

              </section>

       </div>
    )
  }
}


class SearchResult extends React.Component {
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
                  <img src={book.volumeInfo.imageLinks.thumbnail} />
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <ul>
                      <li>Author: {book.volumeInfo.authors}</li>
                      <li>Publisher: {book.volumeInfo.publisher}</li>
                      <li>Genre: {book.volumeInfo.categories[0]}</li>
                      <li>Publish Date: {book.volumeInfo.publishedDate}</li>
                      <li>Pages: {book.volumeInfo.pageCount}</li>
                      <li>Google Rating: {book.volumeInfo.averageRating}</li>
                    </ul>
                    <p>{book.volumeInfo.description}</p>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
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
  constructor(props) {
    super(props)
    this.queryBooks = this.queryBooks.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      query: '',
      googleBooks: []
    }
  }

  queryBooks(query) {
    fetch('https://www.googleapis.com/books/v1/volumes?q='+ query).then((response)=>{
      response.json().then((data)=>{
        this.setState({
          // googleBooks: data.items[0].volumeInfo
          googleBooks: data.items
        })
        console.log(this.state.googleBooks);
        console.log(this.state.googleBooks[0].volumeInfo);
      })
    }).catch((error)=>console.log(error))
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit(event) {
    // console.log(event);
    event.preventDefault()
    this.queryBooks(this.state.query)
  }

  render() {
    return (
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="Search Google Books"/>
          <input className="btn waves-effect waves-light" type="submit" name="action" />
        </form>
        <SearchResult queryBooks={()=>this.state.queryBooks(this.state.query)} googleBooks={this.state.googleBooks} />
      </section>

    )
  }
}

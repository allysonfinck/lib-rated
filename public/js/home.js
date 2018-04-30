

class CreateForm extends React.Component {
  constructor(props) {
    super(props)
    // this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    // this.handleCreate = this.handleCreate.bind(this)
  }

  // handleCreate(book) {
  //   const favedBooks = this.state.myBooks
  //   favedBooks.unshift(book)
  //   this.setState({
  //     myBooks: favedBooks
  //   })
  // }
  //
  // handleCreateSubmit(book) {
  //   fetch('/books', {
  //     method: 'POST',
  //     title: JSON.stringify(book.title),
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response)=> {
  //     return response.json()
  //     console.log(this.myBooks);
  //     console.log(this.favedBook);
  //   }).catch((error)=> console.log(error))
  // }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="input-field col s16">
            <input value={this.props.favedBook.title} type="text" className="validate"/>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input value={this.props.favedBook.author} type="text" className="validate"/>
            </div>
            <div className="input-field col s8">
              <input value={this.props.favedBook.date_published} type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input value={this.props.favedBook.genre} type="text" className="validate"/>
            </div>
          </div>
          <div className="row">
            <textarea value={this.props.favedBook.description} cols="16" rows="10"></textarea>
          </div>
          <div className="row">
            <input value={this.props.favedBook.thumbnail} type="text" className="validate"/>
          </div>
          <input className="btn" type="submit"/>
        </form>
      </div>
    )
  }
}

class SearchResult extends React.Component {
  constructor(props) {
    super(props)
    this.toggleForm = this.toggleForm.bind(this)
    this.createBook = this.createBook.bind(this)
    this.state = {
      bookFormVisible: false,
      favedBook: {}
    }
  }

  createBook(book) {
    this.setState({
      favedBook: {
        title: book.title,
        author: book.authors,
        date_published: book.publishedDate,
        genre: book.categories,
        description: book.description,
        cover_art: book.imageLinks
      }
    })
    console.log(book);
    console.log(this.state.favedBook);
  }

  toggleForm(event) {
    this.setState({
      [event]: !this.state[event]
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
                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons" onClick={()=>{this.toggleForm('bookFormVisible'); this.createBook(book.volumeInfo)}}>add</i></a>
                  </div>
                  <div className="card-action">
                    <a href={book.volumeInfo.canonicalVolumeLink}>Google</a>
                    {this.state.bookFormVisible ? <CreateForm favedBook={this.state.favedBook}/> : ""}
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
      <div>
        <section className="search">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" placeholder="Search Google Books"/>
            <input className="btn waves-effect waves-light" type="submit" name="action" />
          </form>
          <SearchResult queryBooks={()=>this.state.queryBooks(this.state.query)} googleBooks={this.state.googleBooks} />
        </section>
      </div>
    )
  }
}

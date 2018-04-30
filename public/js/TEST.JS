// class Library extends React.Component {
//
//   render() {
//          console.log(this.props.getBook)
//          console.log("testing library");
//     return(
//       <div>
//         <div>
//           <h1>Faves NOT</h1>
//         </div>
//
//         {/* For Loop will go here */}
        // <div className="col s12 m7">
        //   <h3 className="header">Book Title</h3>
        //   <div className="card horizontal cardfave">
        //     <div className="card-image">
        //       <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Stephen_King_Misery_cover.jpg/220px-Stephen_King_Misery_cover.jpg" />
        //     </div>
        //     <div className="card-stacked">
        //       <div className="card-content">
        //         <p>Plot: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
        //         <ul>
        //           <li>Author: Stephen King</li>
        //           <li>Publisher: Viking</li>
        //           <li>Genre: Psychological Horror</li>
        //           <li>Date Published: 1987</li>
        //           <li>Pages: 420</li>
        //         </ul>
        //         <span>Rating: 5</span>
        //       </div>
        //       <div className="card-action">
        //         <a>This is a link</a>
        //       </div>
        //     </div>
        //   </div>
        // </div>
//         {/* end loop */}
//       </div>
//
//     )
//   }
// }




// {/*}<div className="col s12 m7">
//   <h3 className="header">Book Title</h3>
//   <div className="card horizontal cardfave">
//     <div className="card-image">
//       <img src={book.cover_art} />
//     </div>
//     <div className="card-stacked">
//       <div className="card-content">
//         <p>{book.description}</p>
//         <ul>
//           <li>Author: {book.author}</li>
//           <li>Publisher: {book.publisher}</li>
//           <li>Genre: {book.genre}</li>
//           <li>Date Published: {book.date_published}</li>
//           <li>Pages: 420</li>
//         </ul>
//         <span>Rating: {book.rating}</span>
//       </div>
//       <div className="card-action">
//         <a>This is a link</a>
//       </div>
//     </div>
//   </div>
// </div>*/}

//=======================================================================
// .       BACKUP COPY OF HOME
//=======================================================================


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

        // console.log(this.state.value);
        //
        // this.props.addBookDB(this.state);
        // this.props.addBookDB(this.state)
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
                      <li>Google Rating: {book.volumeInfo.averageRating}</li>
                    </ul>
                    <p>{book.volumeInfo.description}</p>
                    <a
                        onClick = {()=>this.props.getNewBook(book.volumeInfo)}

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
  constructor(props) {
    super(props)
    this.queryBooks = this.queryBooks.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getBooks = this.getBooks.bind(this)
    this.getBook = this.getBook.bind(this)
    this.createBook =this.createBook.bind(this)
    this.addBookDB = this.addBookDB.bind(this)
    this.updateBookDB=this.updateBookDB.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.toggleState=this.toggleState.bind(this)
    this.getNewBook =this.getNewBook.bind(this)

    this.state = {
      query: '',
      googleBooks: [],
      foundBooks:[],
      selectedBook:{},
      toggleState:false,
        bookListVisible: true, bookVisible:false,
        bookFormVisible: true, editFormVisible:true,
        book:{
            title:"",
            author:[],
            genre:[],
            date_published:"",
            description:"",
            cover_art:""
        }
    }
  }

  componentDidMount(){
          this.getBooks()
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
  //====================== CRUD ROUTES FOR CUSTOM API =============================
      getBooks(){
          fetch('/books').then(response=>{response.json().then(data=>{
              console.log(data)
              this.setState({foundBooks:data})
          })})
      }



      getBook(book){
          this.setState({selectedBook:book})
      }

      getNewBook(book){
            console.log(book);
            console.log(this.state.title);


            this.setState({book:{title:book.title , author: book.authors[0], genre:book.categories[0], date_published: book.publishedDate, description: book.description , cover_art:book.imageLinks.thumbnail }}

                , ()=>{
              console.log(this.state.title);
              this.addBookDB(this.state.book);

            })



    }



      createBook(book){
          console.log("createBook executed");
          const updatedBooks = this.state.foundBooks
          updatedBooks.unshift(book)
          this.setState({foundBooks: updatedBooks})

      }

      addBookDB(book){
          console.log("addBookDB executed");
          console.log(book);
          fetch('/books', {body: JSON.stringify(book), method: 'POST',
                      headers:
                          {
                              'Accept': 'application/json, text/plain, */*',
                              'Content-Type': 'application/json'
                          }
      })
      .then(response=>{return response.json()})
      .then(response=>this.createBook(response))
      .catch(error=>console.log(error))
      }




      updateBookDB(book){
          console.log("updatebook executed");
          console.log(book);
          fetch('/books/'+ book.id, {body:JSON.stringify(book), method:'PUT',
              headers:
                  {
                      'Accept':'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                  }
          })
          .then(response=> response.json())
          .then(updatedbook=>{this.getBooks()})
          .catch(error=>{console.log(error)})
      }

      deleteBook(book, index){
          console.log("delete executed");
          fetch('/books/'+ book.id, {method:'DELETE'})
          .then(
              data=>{
                  this.setState(
                      {foundbooks:[ ...this.state.foundBooks.slice(0, index), ...this.state.foundBooks.slice(index+1)]}
                  )
              }
          )
      }

      toggleState(st1, st2){
          console.log("toggle executed");
          this.setState({[st1]: !this.state[st1]})
          this.setState({[st2]: !this.state[st2]})
      }
  // *******************************************
  render() {
    return (
          <div>
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="Search Google Books"/>
          <input className="btn waves-effect waves-light" type="submit" name="action" />
        </form>
            <SearchResult  addBookDB={this.addBookDB}  queryBooks={()=>this.state.queryBooks(this.state.query)} googleBooks={this.state.googleBooks}
            getNewBook = {this.getNewBook}
         />

      </section>




{/*}
          {this.state.bookListVisible?
           <Library
               toggleState={this.toggleState}
               books={this.state.foundBooks}
               getBook={this.getBook}
               deleteBook={this.deleteBook}
          />:""}


        {this.state.bookVisible ?
          <LibraryDetail
                  toggleState={this.toggleState}
                  book ={this.state.selectedBook}
                  submitDB={this.updateBookDB}
         />:""}




          {this.state.bookFormVisible?
               <RatingForm
                  create= {this.createBook}
                  submitDB ={this.addBookDB}
               />
           :""}
    */}
       </div>
    )
  }
}

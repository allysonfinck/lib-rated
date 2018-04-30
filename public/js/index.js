class Index extends React.Component {
  constructor(props) {
    super(props)
    this.toggleState = this.toggleState.bind(this)
    this.queryBooks = this.queryBooks.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getBooks = this.getBooks.bind(this)
    this.getBook = this.getBook.bind(this)
    this.createBook =this.createBook.bind(this)
    this.addBookDB = this.addBookDB.bind(this)
    this.updateBookDB=this.updateBookDB.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.toggleState2=this.toggleState2.bind(this)
    this.getNewBook =this.getNewBook.bind(this)

    this.state = {
      homePageVisible: true,
      aboutPageVisible: false,
      libraryPageVisible: false,
      bookPageVisible:false,
      profilePageVisible: false,
      bookFormVisible: true,
      editFormVisible:true,
      query: '',
      googleBooks: [],
      foundBooks:[],
      selectedBook:{},
      // Need to review, may need to change names or delete toggle states and merge with Eric's version.
      toggleState:false,
        bookListVisible: true,

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

  toggleState(pg1, pg2, pg3, pg4,pg5,pg6) {
    this.setState({
      [pg1]: true,
      [pg2]: false,
      [pg3]: false,
      [pg4]: false,
      [pg5]: false,
      [pg6]: false
    })
  }

  //====================== METHODS FOR GOOGLE BOOKS API =============================
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
                  console.log(this.state.foundBooks);
              }
          )
      }

      toggleState2(st1, st2){
          console.log("toggle executed");
          this.setState({[st1]: !this.state[st1]})
          this.setState({[st2]: !this.state[st2]})
      }
  // *******************************************

  render() {
    return(
      <div>
        <Nav toggleState={this.toggleState} />
        {this.state.homePageVisible ?
            <Home

            queryBooks={()=>this.state.queryBooks(this.state.query)}
            googleBooks={this.state.googleBooks}
            getNewBook = {this.getNewBook}
            addBookDB={this.addBookDB}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            toggleState={this.toggleState}
            />
            : ""
        }

        {this.state.aboutPageVisible ? <About /> : ""}

        {this.state.libraryPageVisible ?
            <Library
            toggleState={this.toggleState}
            books={this.state.foundBooks}
            getBook={this.getBook}
            deleteBook={this.deleteBook}
             />
             : ""
         }

        {this.state.bookPageVisible ?
           <LibraryDetail
                   toggleState={this.toggleState}
                   book ={this.state.selectedBook}
                   submitDB={this.updateBookDB}
          />:""
        }
        {/*}{this.state.bookFormVisible?
             <RatingForm
                create= {this.createBook}
                submitDB ={this.addBookDB}
             />
         :""}*/}
        {this.state.profilePageVisible ? <Profile /> : ""}
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.querySelector('.index')
)

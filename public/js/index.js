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
    this.formSubmit= this.formSubmit.bind(this)
    this.formChange=this.formChange.bind(this)

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
            cover_art:"",
            rating:0
        },
      hasRating:false,
      showForm:false

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

          this.setState({selectedBook:book}, ()=>{
          console.log(this.state.selectedBook);
      })

      }

      getNewBook(book){
            console.log(book);
            this.setState({
              book: {
                title: ( book.title) ? book.title.replace(/\'/g, ""):"" ,
                author: (book.authors)? book.authors[0].replace(/\'/g, ""):"",
                genre: (book.categories) ? book.categories[0].replace(/\'/g, "") : "",
                date_published: (book.publishedDate) ? book.publishedDate.replace(/\'/g, ""):"",
                description: (book.description) ? book.description.replace(/\'/g, ""):"" ,
                cover_art: (book.imageLinks)? book.imageLinks.thumbnail: "../images/no-image.jpg",
                rating:0
              }
            }

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

      formChange(event, book){
            this.setState({
                book:
                  {
                    title:book.title,
                    author:book.author,
                    genre:book.genre,
                    date_published:book.date_published,
                    description:book.description,
                    cover_art:book.cover_art,
                    rating:event.target.value,
                    id:book.id
                }
            },
            ()=>{ console.log(this.state.book)}
        )

      }


      formSubmit(event, book){
          event.preventDefault();
          console.log("formSubmit executed");
        console.log(this.state.book);

         this.updateBookDB(this.state.book)
         this.setState({showForm:false})
         this.setState({hasRating:true})



      }

      updateBookDB(book){
          console.log("updatebook executed");
          console.log(book);
          console.log(book.rating);
          fetch('/books/'+ book.id,
           {body:JSON.stringify(book), method:'PUT',
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
                   hasRating={this.state.hasRating}
                   showForm={this.state.showForm}
                   book ={this.state.selectedBook}
                   formSubmit={this.formSubmit}
                   rating={this.state.book.rating}
                   formChange={this.formChange}
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

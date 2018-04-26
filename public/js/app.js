

class CustomBookAPI extends React.Component{
    render(){
        return <div>
         <h3>Testing Custom BookApi</h3>
        </div>
    }
}


class BookForm extends React.Component{
    render(){
        return <div>
        <h3>Testing BookForm</h3>
        <form>
            <input type="text"  placeholder="title" /> <br/>
            <input type="text"  placeholder="author" /> <br/>
            <input type="text"  placeholder="publisher" /> <br/>
            <input type="text"  placeholder="date_published" /> <br/>
            <input type="text"  placeholder="description" />  <br/>
            <input type="text"  placeholder="cover_art" /> <br/>

            <input type="Submit" value="Add Book" />
        </form>
        </div>
    }
}

class Book extends React.Component{
    render() {

        return <div>
            <h3>Testing Book</h3>
            <h3>{this.props.book.title}</h3>

            <p>{this.props.book.description}</p>
            <p>{this.props.book.cover_art}</p>

            <ul>
                <li>{this.props.book.author}</li>
                <li>{this.props.book.publisher}</li>
                <li>{this.props.book.date_published} </li>
            </ul>

        </div>
    }
}

// <li onClick={()=>{this.props.getBook(book)}}>{book.title}</li>
class BookList extends React.Component{
    render(){
            console.log(this.props.getBook)
        return <div>
            <h3>Testing BookList</h3>
            <ul>
                {this.props.books.map(
                    (book, index)=>{
                        return <li onClick={()=>this.props.getBook(book)}>{book.title}</li>
                    }
                )}

            </ul>
        </div>
    }
}

// =============================================================================
//                       PRIMARY API COMPONENT
// =============================================================================

class GoogleBooks extends React.Component{
    constructor(props){
        super(props)
        this.queryBooks = this.queryBooks.bind(this)
        this.getBooks = this.getBooks.bind(this)
        this.getBook = this.getBook.bind(this)
        this.addBooks = this.addBooks.bind(this)
        this.deleteBook = this.deleteBook.bind(this)

        this.state ={query:'harry+potter', foundBooks:[], selectedBook:{}}
    }

    componentDidMount(){
        {this.queryBooks(this.state.query)}
        this.getBooks()
    }

//======================  GOOGLE API ====================================//

    queryBooks(query){
        fetch('https://www.googleapis.com/books/v1/volumes?q='+ query)
        .then((response)=>{
                response.json().then(
                    (data)=>{
                        console.log(data)
                    }
                )
            }
        )
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



    addBooks(){
        fetch('/books', {body: JSON.stringify(), method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        }
    })
    .then(response=>console.log(response)).catch(error=>console.log(error))
    }




    deleteBook(book, index){
        fetch('/books/'+ book.id, {method:'DELETE'})
        .then(
            data=>{
                this.setState(
                    {foundbooks:[ ...this.state.foundBooks.slice(0, index), ...this.state.foundBooks.slice(index+1)]}
                )
            }
        )
    }

// *******************************************
    render(){

        return( <div>
             <h1> HELLO</h1>
             <CustomBookAPI/>
             <BookList
                 books={this.state.foundBooks}
                 getBook={this.getBook}
            />
             <Book
                 book ={this.state.selectedBook}
             />
             <BookForm books={this.state.foundBooks}/>
         </div>)
    }

}



ReactDOM.render(
    <GoogleBooks/>,
    document.querySelector('main')
)

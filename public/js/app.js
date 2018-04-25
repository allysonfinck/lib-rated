

class CustomBookAPI extends React.Component{
    render(){
        return <div>
         <h3>Testing</h3>
        </div>
    }
}


class BookList extends React.Component{
    render(){
            console.log(this.props.books)
        return <div>
            <h3>Testing BookList</h3>
            <ul>
                {this.props.books.map(
                    (book, index)=>{
                        return <li>{book.title}, {book.author},{book.genre}</li>
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
        this.addBooks = this.addBooks.bind(this)
        this.deleteBook = this.deleteBook.bind(this)

        this.state ={query:'harry+potter', foundBooks:[]}
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

// --------------------------------------
    render(){

        return( <div>
             <h1> HELLO</h1>
             <CustomBookAPI/>
             <BookList books={this.state.foundBooks}/>
         </div>)
    }

}



ReactDOM.render(
    <GoogleBooks/>,
    document.querySelector('main')
)

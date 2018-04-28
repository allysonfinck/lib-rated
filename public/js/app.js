// // 
// //
// // class CustomBookAPI extends React.Component{
// //     render(){
// //         return <div>
// //          <h3>Testing Custom BookApi</h3>
// //         </div>
// //     }
// // }
// //
// //
// // class BookForm extends React.Component{
// //     constructor(props){
// //         super(props)
// //         this.formChange = this.formChange.bind(this)
// //         this.formSubmit = this.formSubmit.bind(this)
// //         this.state ={
// //             title:"",
// //             author:"",
// //             publisher:"",
// //             date_published:"",
// //             description:"",
// //             cover_art:""
// //         }
// //     }
// //
// //     componentDidMount(){
// //         if(this.props.book){
// //             this.setState({
// //                 title:this.props.book.title,
// //                 author:this.props.book.author,
// //                 publisher:this.props.book.publisher,
// //                 date_published:this.props.book.date_published,
// //                 description:this.props.book.description,
// //                 cover_art:this.props.book.cover_art,
// //                 id:this.props.book.id
// //             })
// //         }
// //     }
// //
// //
// //     formChange(event){
// //         // console.log(event.target.id);
// //         // console.log(event.target.value);
// //
// //         this.setState({[event.target.id]:event.target.value})
// //     }
// //
// //     formSubmit(event){
// //         event.preventDefault();
// //         this.props.submitDB(this.state);
// //     }
// //
// //     render(){
// //     console.log(this.props.book);
// //
// //
// //         return <div>
// //         <h3>Testing BookForm</h3>
// //         <form  onSubmit={()=>this.formSubmit(event)}>
// //             <input onChange={this.formChange}  value ={this.state.title} type="text"  placeholder="title" id="title"/> <br/>
// //
// //             <input onChange={this.formChange}  value ={this.state.author} type="text"  placeholder="author"  id="author"/> <br/>
// //
// //             <input onChange={this.formChange}  value ={this.state.publisher} type="text"  placeholder="publisher"  id ="publisher"/> <br/>
// //
// //             <input onChange={this.formChange}   value ={this.state.date_published} type="text"  placeholder="date_published" id="date_published"/> <br/>
// //
// //             <input onChange={this.formChange}   value ={this.state.description} type="text"  placeholder="description"  id="description"/>  <br/>
// //
// //             <input onChange={this.formChange}   value ={this.state.cover_art} type="text"  placeholder="cover_art" id="cover_art"/> <br/>
// //
// //             <input type="Submit" value="Add Book" />
// //         </form>
// //         </div>
// //     }
// // }
// //
// //
// //
// // class Book extends React.Component{
// //     render() {
// // {/*console.log(this.props.book);
// // console.log(this.props.submitDB);*/}
// //         return <div>
// //             <h3>Testing Book</h3>
// //             <h3>{this.props.book.title}</h3>
// //
// //             <p>{this.props.book.description}</p>
// //             <p>{this.props.book.cover_art}</p>
// //
// //             <ul>
// //                 <li>{this.props.book.author}</li>
// //                 <li>{this.props.book.publisher}</li>
// //                 <li>{this.props.book.date_published} </li>
// //             </ul>
// //
// //             <BookForm
// //                 book= {this.props.book}
// //                 submitDB = {this.props.submitDB}
// //             />
// //
// //         </div>
// //     }
// // }
// // // fsjosjfjefjf
// // class BookList extends React.Component{
// //     render(){
// //             {/*} console.log(this.props.getBook)*/}
// //         return <div>
// //             <h3>Testing BookList</h3>
// //             <div>
// //                 {this.props.books.map(
// //                     (book, index)=>{
// //                         return <div>
// //                              <li onClick={()=>{this.props.getBook(book); this.props.toggleState('bookVisible', 'bookFormVisible')}}>
// //                                     {book.title}
// //                             </li>
// //                             <button onClick={()=>this.props.deleteBook(book, index)}>DELETE</button><br/>
// //                         </div>
// //                     }
// //                 )}
// //
// //             </div>
// //         </div>
// //     }
// // }
// //
// // // =============================================================================
// // //                       PRIMARY API COMPONENT
// // // =============================================================================
// //
// // class GoogleBooks extends React.Component{
// //     constructor(props){
// //         super(props)
// //         this.queryBooks = this.queryBooks.bind(this)
// //         this.getBooks = this.getBooks.bind(this)
// //         this.getBook = this.getBook.bind(this)
// //         this.createBook =this.createBook.bind(this)
// //         this.addBookDB = this.addBookDB.bind(this)
// //         this.updateBookDB=this.updateBookDB.bind(this)
// //         this.deleteBook = this.deleteBook.bind(this)
// //         this.toggleState=this.toggleState.bind(this)
// //
// //         // this.formSubmit =this.formSubmit.bind(this)
// //         // this.formChange= this.formChange.bind(this)
// //
// //         this.state ={query:'harry+potter', foundBooks:[], selectedBook:{}, toggleState:false,
// //                         bookListVisible: true, bookVisible:false,
// //                         bookFormVisible: true, editFormVisible:true
// //                     }
// //     }
// //
// //     componentDidMount(){
// //         {this.queryBooks(this.state.query)}
// //         this.getBooks()
// //
// //     }
// //
// // //======================  GOOGLE API ====================================//
// //
// //     queryBooks(query){
// //         fetch('https://www.googleapis.com/books/v1/volumes?q='+ query)
// //         .then((response)=>{
// //                 response.json().then(
// //                     (data)=>{
// //                         console.log(data)
// //                     }
// //                 )
// //             }
// //         )
// //     }
//
//
//
// //====================== CRUD ROUTES FOR CUSTOM API =============================
//     getBooks(){
//         fetch('/books').then(response=>{response.json().then(data=>{
//             // console.log(data)
//             this.setState({foundBooks:data})
//         })})
//     }
//
//
//
//     getBook(book){
//         this.setState({selectedBook:book})
//     }
//
//
//     createBook(book){
//         console.log("createBook executed");
//         const updatedBooks = this.state.foundBooks
//         updatedBooks.unshift(book)
//         this.setState({foundBooks: updatedBooks})
//
//     }
//
//     addBookDB(book){
//         fetch('/books', {body: JSON.stringify(book), method: 'POST',
//                     headers:
//                         {
//                             'Accept': 'application/json, text/plain, */*',
//                             'Content-Type': 'application/json'
//                         }
//     })
//     .then(response=>{return response.json()})
//     .then(response=>this.createBook(response))
//     .catch(error=>console.log(error))
//     }
//
//
//
//
//     updateBookDB(book){
//         console.log("updatebook executed");
//         console.log(book);
//         fetch('/books/'+ book.id, {body:JSON.stringify(book), method:'PUT',
//             headers:
//                 {
//                     'Accept':'application/json, text/plain, */*',
//                     'Content-Type': 'application/json'
//                 }
//         })
//         .then(response=> response.json())
//         .then(updatedbook=>{this.getBooks()})
//         .catch(error=>{console.log(error)})
//     }
//
//     deleteBook(book, index){
//         console.log("delete executed");
//         fetch('/books/'+ book.id, {method:'DELETE'})
//         .then(
//             data=>{
//                 this.setState(
//                     {foundbooks:[ ...this.state.foundBooks.slice(0, index), ...this.state.foundBooks.slice(index+1)]}
//                 )
//             }
//         )
//     }
//
//     toggleState(st1, st2){
//         console.log("toggle executed");
//         this.setState({[st1]: !this.state[st1]})
//         this.setState({[st2]: !this.state[st2]})
//     }
// // *******************************************
//     render(){
//
//         return( <div>
//              <h1> HELLO</h1>
//              <CustomBookAPI/>
//
//              <BookList
//                  toggleState={this.toggleState}
//                  books={this.state.foundBooks}
//                  getBook={this.getBook}
//                  deleteBook={this.deleteBook}
//             />
//
//             {this.state.bookVisible?
//                  <Book
//                      toggleState={this.toggleState}
//                      book ={this.state.selectedBook}
//                      submitDB={this.updateBookDB}
//                  />
//             :""}
//
//             {this.state.bookFormVisible?
//                  <BookForm
//                     create= {this.createBook}
//                     submitDB ={this.addBookDB}
//                  />
//              :""}
//          </div>)
//     }
//
// }
//
//
//
// ReactDOM.render(
//     <GoogleBooks/>,
//     document.querySelector('main')
// )

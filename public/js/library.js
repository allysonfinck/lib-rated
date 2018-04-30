
class Library extends React.Component{
  render(){
    console.log(this.props.books);
    return <div className="library-container">
      <div className="back-home"><a onClick={()=>{this.props.toggleState('homePageVisible', 'libraryPageVisible')}}>Back Home</a></div>
      <h1>MY LIBRARY</h1>

      {this.props.books.map((book, index)=>{
          return <img className="thumbnail" src={book.cover_art}
            onClick={()=>
              {
                this.props.getBook(book);
                this.props.toggleState('bookPageVisible', 'libraryPageVisible')
              }
            }/>
          })}

    </div>
  }
}

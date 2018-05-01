
class Library extends React.Component{
  render(){
    console.log(this.props.books);
    return <div >

          < div className="back-home">
              <a onClick={()=>{this.props.toggleState('homePageVisible', 'libraryPageVisible')}}>Back Home</a>
          </div>

          <h1>MY LIBRARY</h1>
<div className="library-container">
          {this.props.books.map((book, index)=>{
                return <div className="thumbnail-container">
                          <img className="thumbnail" src={book.cover_art}
                            onClick={()=>
                              {
                                this.props.getBook(book);
                                this.props.toggleState('bookPageVisible', 'libraryPageVisible')
                              }
                          }
                          />
                          <span><a className="delete" onClick={()=>
                                {
                                    this.props.deleteBook(book, index);

                                }

                         }>Delete
                         </a></span>
                </div>


         })}
</div>
    </div>
  }
}

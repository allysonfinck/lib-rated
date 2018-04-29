
class Library extends React.Component{

    render(){
        console.log(this.props.books);
        return <div>
                <h1>Testing LIBRARY</h1>

                {this.props.books.map((book, index)=>{
                    return<div className="col s12 m7">
                      <h3 className="header">Book Title</h3>
                      <div className="card horizontal cardfave">
                        <div className="card-image">
                          <img src={book.cover_art}
                           onClick={()=>{this.props.getBook(book); this.props.toggleState('bookVisible', 'bookListVisible')}} />
                        </div>
                        <div className="card-stacked">
                          <div className="card-content">
                            <p>{book.description}</p>
                            <ul>
                              <li>Author: {book.author}</li>
                              <li>Publisher: {book.publisher}</li>
                              <li>Genre: {book.genre}</li>
                              <li>Date Published: {book.date_published}</li>
                              <li>Pages: 420</li>
                            </ul>
                            <span>Rating: {book.rating}</span>
                          </div>
                          <div className="card-action">
                            <a>This is a link</a>
                          </div>
                        </div>
                      </div>
                    </div>})}


        </div>


    }

}

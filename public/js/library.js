
class Library extends React.Component{

    render(){
        console.log(this.props.books);
        return <div>
                <h1>MY LIBRARY</h1>
                <a onClick={()=>{this.props.toggleState('homePageVisible', 'libraryPageVisible')}}>Back to Home</a>
                {this.props.books.map((book, index)=>{
                    return<div className="col s12 m7">
                          <img src={book.cover_art}
                           onClick={()=>
                               {
                                   this.props.getBook(book);
                                   this.props.toggleState('bookPageVisible', 'libraryPageVisible')
                               }
                           }
                           /><br/>

                           <button  type="Submit" onClick={()=>
                               {
                                   this.props.deleteBook(book, index);
                                
                               }
                           }>Delete</button>



                    </div>})}


        </div>


    }

}

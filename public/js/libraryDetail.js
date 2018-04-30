

class LibraryDetail extends React.Component{
    render(){
        console.log(this.props.book);
        return <div>
            <h1>Look Inside: {this.props.book.title}</h1>
            <a onClick={()=>{this.props.toggleState('libraryPageVisible', 'bookPageVisible')}}>Back to Library</a>
            <div className="col s12 m7">

             <div className="card horizontal cardfave">
               <div className="card-image">
                 <img src={this.props.book.cover_art} />
               </div>
               <div className="card-stacked">
               <h5> Title: {this.props.book.title}</h5>
                 <div className="card-content">

                   <p>{this.props.book.description}</p>
                   <ul>
                     <li>Author: {this.props.book.author}</li>
                     <li>Publisher: {this.props.book.publisher}</li>
                     <li>Genre: {this.props.book.genre}</li>
                     <li>Date Published: {this.props.book.date_published}</li>
                   </ul>
                   <span>
                   {this.props.hasRating ? <a>Edit Rating</a> : <a>Add Rating</a>}
                   </span>
                 </div>
                 <div className="card-action">
                   <a>This is a link</a>

                 <button  type="Submit" onClick={()=>
                     {
                         this.props.deleteBook(book, index);

                     }

                 }>Delete</button>
                  </div>
               </div>
             </div>
           </div>

       </div>


    }
}

// Rating
//  if rating is null then display Add Rating, else diplay edit Rating
//  {this.hasRating}? <a onClick=> Edit Rating </a> : <a onClick>Add Rating </a>
//      1.) Create a hasRating state in home set it to false pass it through to LibraryDetail
//      2.) How to change it? Test if actual object is null ONLOAD of book.
//  onClick event:
//      Needs to toggle edit AND create form. Set edit for on this line only by calling it within the library detail.
//      Can use the same form but need to call different functions!
//  Review Creat and Edit methods

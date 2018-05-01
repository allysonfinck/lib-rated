

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
                    {(this.props.showForm) ?
                       <form  onSubmit={()=>this.props.formSubmit(event, this.props.book)}>
                            <label>Rating:{this.props.rating}
                            <input type="text" onChange={()=>this.props.formChange(event, this.props.book)} value={this.props.rating} placeholder="Enter Rating 1-5" id="rating" ></input>

                            </label>
                            <button type="submit">Submit</button>
                        </form>

                     : <a onClick={()=>this.props.toggleState('showForm')}>Edit Rating: {this.props.book.rating}</a>
                    }


                   </span>
                 </div>
                 <div className="card-action">
                   <a>This is a link</a>

                  </div>
               </div>
             </div>
           </div>

       </div>


    }
}

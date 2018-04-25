
class BookList extends React.Component{
    render(){
        return <div>

        </div>
    }
}

class CustomBookAPI extends React.Component{
    render(){
        return <div>

         <h3>Testing</h3>
        </div>
    }
}

class GoogleBooks extends React.Component{
    constructor(props){
        super(props)
        this.queryBooks = this.queryBooks.bind(this)
        this.state ={query:'harry+potter'}
    }

    componentDidMount(){
        {this.queryBooks(this.state.query)}
    }

    queryBooks(query){
        console.log(this);
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

    render(){

        console.log(this.queryBooks());
        return( <div>
         <h1> HELLO </h1>
         <CustomBookAPI/>
         </div>)
    }

}

ReactDOM.render(
    <GoogleBooks/>,
    document.querySelector('main')
)

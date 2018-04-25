
class BookList extends React.Component{
    constructor(props){
        super(props)

    }


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
        this.getbooks = this.getbooks.bind(this)
        this.state ={query:'harry+potter', foundBooks:"testing state found books"}
    }

    componentDidMount(){
        {this.queryBooks(this.state.query)}
        this.getbooks()
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



//====================== CRUD ROUTES FOR CUSTOM API ====================================//
    getbooks(){
        fetch('/books').then(response=>{response.json().then(data=>{
            console.log(data)
            this.setState({foundBooks:data})
        })})
    }


    addbooks(){
        fetch('/books', {body: JSON.stringify(), method: 'POST',
                    headers:
                        {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        }
    })
    .then(response=>console.log(response)).catch(error=>console.log(error))
    }


// ===============================================================================
    render(){

        return( <div>
         <h1> {this.state.foundBooks[0].title} </h1>
         <CustomBookAPI/>
         </div>)
    }

}



ReactDOM.render(
    <GoogleBooks/>,
    document.querySelector('main')
)

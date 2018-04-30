class Index extends React.Component {
  constructor(props) {
    super(props)
    this.toggleState = this.toggleState.bind(this)

    this.state = {
      homePageVisible: true,
      aboutPageVisible: false,
      libraryPageVisible: true,
      profilePageVisible: false

    }
  }

  // componentDidMount(){
  //         this.getBooks()
  // }

  toggleState(pg1, pg2, pg3, pg4) {
    this.setState({
      [pg1]: true,
      [pg2]: false,
      [pg3]: false,
      [pg4]: false
    })
  }


  // getBooks(){
  //     fetch('/books').then(response=>{response.json().then(data=>{
  //         console.log(data)
  //         this.setState({foundBooks:data})
  //     })})
  // }
  //
  // getBook(book){
  //     this.setState({selectedBook:book})
  // }

  render() {
    return(
      <div>
        <Nav toggleState={this.toggleState} />
        {this.state.homePageVisible ? <Home /> : ""}
        {this.state.aboutPageVisible ? <About /> : ""}
        {/*}{this.state.libraryPageVisible ? <Library
            books={this.state.foundBooks}
            getBook={this.getBook} /> : ""} */}
        {this.state.profilePageVisible ? <Profile /> : ""}
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.querySelector('.index')
)


class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <h1>results!</h1>
      </div>
    )
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideResult: true
    }
  }

  toggleHidden() {
    event.preventDefault()
    this.setState({
      hideResult: !this.state.hideResult
    })
  }



  render() {
    return (
      <form>
        <input type="text" placeholder="Search Google Books"/>
        <input onClick={this.toggleHidden.bind(this)} className="btn waves-effect waves-light" type="submit" name="action" />
        {!this.state.hideResult && <SearchResult />}
      </form>

    )
  }
}

ReactDOM.render(
  <Search />,
  document.querySelector('.search')
)

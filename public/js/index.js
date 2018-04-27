class Index extends React.Component {
  constructor(props) {
    super(props)
    this.toggleState = this.toggleState.bind(this)
    this.state = {
      homePageVisible: true,
      aboutPageVisible: false,
      libraryPageVisible: false,
      profilePageVisible: false
    }
  }

  toggleState(pg1, pg2, pg3, pg4) {
    this.setState({
      [pg1]: !this.state[pg1],
      [pg2]: false,
      [pg3]: false,
      [pg4]: false
    })
  }

  render() {
    return(
      <div>
        <Nav toggleState={this.toggleState} />
        {this.state.homePageVisible ? <Home /> : ""}
        {this.state.aboutPageVisible ? <About /> : ""}
        {this.state.libraryPageVisible ? <Library /> : ""}
        {this.state.profilePageVisible ? <Profile /> : ""}
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.querySelector('.index')
)

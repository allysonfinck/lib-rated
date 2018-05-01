
class Nav extends React.Component {
  render() {
    return(
      <div className="navbar-fixed">
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#">Login</a></li>
            </ul>
            <a className="brand-logo right" href="#" onClick={()=>this.props.toggleState('homePageVisible', 'aboutPageVisible', 'libraryPageVisible', 'profilePageVisible')}>lib/Rated</a>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab" href="#" onClick={()=>this.props.toggleState('homePageVisible', 'aboutPageVisible', 'libraryPageVisible', 'profilePageVisible', 'bookPageVisible')}><a>Home</a></li>
              <li className="tab" href="#" onClick={()=>this.props.toggleState('aboutPageVisible', 'homePageVisible', 'libraryPageVisible', 'profilePageVisible','bookPageVisible')}><a>About</a></li>
              <li className="tab" href="#" onClick={()=>this.props.toggleState('libraryPageVisible', 'aboutPageVisible', 'homePageVisible', 'profilePageVisible','bookPageVisible')}><a>Library</a></li>
              <li className="tab" href="#" onClick={()=>this.props.toggleState('profilePageVisible', 'aboutPageVisible', 'libraryPageVisible', 'homePageVisible','bookPageVisible')}><a>Profile</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

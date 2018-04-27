
class SearchResult extends React.Component {
  render() {
    return (
      <div>
        {/* Demo Result */}
        <div className="col s12 m7">
          <h3 className="header">Book Title</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Stephen_King_Misery_cover.jpg/220px-Stephen_King_Misery_cover.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Plot: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
                <ul>
                  <li>Author: Stephen King</li>
                  <li>Publisher: Viking</li>
                  <li>Genre: Psychological Horror</li>
                  <li>Date Published: 1987</li>
                  <li>Pages: 420</li>
                </ul>
                <span>Rating: 5</span>
              </div>
              <div className="card-action">
                <a>This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <h3 className="header">Book Title</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Stephen_King_Misery_cover.jpg/220px-Stephen_King_Misery_cover.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Plot: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
                <ul>
                  <li>Author: Stephen King</li>
                  <li>Publisher: Viking</li>
                  <li>Genre: Psychological Horror</li>
                  <li>Date Published: 1987</li>
                  <li>Pages: 420</li>
                </ul>
                <span>Rating: 5</span>
              </div>
              <div className="card-action">
                <a>This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <h3 className="header">Book Title</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Stephen_King_Misery_cover.jpg/220px-Stephen_King_Misery_cover.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Plot: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
                <ul>
                  <li>Author: Stephen King</li>
                  <li>Publisher: Viking</li>
                  <li>Genre: Psychological Horror</li>
                  <li>Date Published: 1987</li>
                  <li>Pages: 420</li>
                </ul>
                <span>Rating: 5</span>
              </div>
              <div className="card-action">
                <a>This is a link</a>
              </div>
            </div>
          </div>
        </div>
        {/* End Demo */}
      </div>
    )
  }
}

class Home extends React.Component {
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
      <section className="search">
        <form>
          <input type="text" placeholder="Search Google Books"/>
          <input onClick={this.toggleHidden.bind(this)} className="btn waves-effect waves-light" type="submit" name="action" />
        </form>
        {!this.state.hideResult && <SearchResult />}
      </section>

    )
  }
}

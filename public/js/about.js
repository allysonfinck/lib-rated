
class Us extends React.Component {
  render() {
    return(
      <div className="us-container">
        <div className="col s12 m7">
          <h3 className="header">Eric Sanchez</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="../images/Profile BW 2016.jpg" alt="Eric" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
              </div>
              <div className="card-action">
                <a>This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <h3 className="header">Allyson Finck</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="../images/AllysonFinckProfile.jpeg" alt="Allyson" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
              </div>
              <div className="card-action">
                <a>This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <h3 className="header">Teilachanell Angel</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="../images/TeilaProfile.jpeg" alt="Teila" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nesciunt minus ab animi autem sed modi perspiciatis a, deserunt magnam, provident ut nam quis minima aspernatur repudiandae iusto quam fugit.</p>
              </div>
              <div className="card-action">
                <a>This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

class About extends React.Component {
  render() {
    return(
      <div>
        <h1>About lib/Rated</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio obcaecati eos ad impedit dolores fuga enim. Consequuntur laboriosam odio, dolorem commodi perspiciatis earum? Placeat aliquid aut blanditiis minima! Libero, repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque voluptatum libero dolor nisi, ipsam minima natus est enim ratione temporibus, deleniti eos praesentium quidem adipisci pariatur. Neque, officia, itaque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam esse, veniam laudantium harum. Odit similique, est, delectus laudantium debitis tempora suscipit eum doloremque beatae aliquam dolorem eius aperiam ipsum quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, veniam quasi, alias architecto voluptates, perferendis nemo inventore aliquam minus consequatur similique! Sed tempore, sapiente reprehenderit alias possimus perspiciatis assumenda nostrum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis doloremque quo dolore nostrum quisquam voluptatum officia suscipit eius possimus adipisci, porro minus autem quam deleniti voluptatibus eaque amet earum labore.</p>
        <hr/>
        <h2>Meet the Team</h2>
        <Us />
      </div>

    )
  }
}

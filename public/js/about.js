
class Us extends React.Component {
  render() {
    return(
      <div className="us-container">
        <div className="col s12 m7">
          <h3 className="header">Eric Sanchez</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="../images/EricProfile.jpeg" alt="Eric" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I am a Web Developer with problem solving skills who loves to create. I seek out challenges and have an innate ability to adapt to any situation. My history as a hands-on tradesman, has given me the ability to compare old world and new world methods, which means I can offer many perspectives to tackling almost any task. My self-motivated and loyal nature means that I can keep moving forward despite the hardships of a project no matter how daunting.</p>

              </div>
              <div className="card-action">
                <a href="https://www.linkedin.com/in/esanchez2025/">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <h3 className="header">Allyson Finck</h3>
          <div className="card horizontal cardfave">
            <div className="card-image">
              <img src="../images/AllysonProfile.jpeg" alt="Allyson" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>I’m a web developer passionate about innovation. I seek new and more difficult challenges to grow as a person and a problem solver. My goal in life is to always be learning - from new technology, people and ideas. As a leader I drive to inspire myself and others to forge creative and innovative paths to grow as developers!</p>

              </div>
              <div className="card-action">
                <a href="https://www.linkedin.com/in/allyson-finck/">Contact Me</a>
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
                <p>A multifaceted professional driven by a passion for learning, growth, and development. My aim is to develop well rounded capabilities applicable across industries. My destination, as I envision it will lie at the intersection of business, technology and social impact. Thus, I am drawn to companies and organizations whose missions center on delivering a positive social impact; particularly those focused on improving economic mobility and reducing inequity.</p>
              </div>
              <div className="card-action">
                <a href="https://www.linkedin.com/in/teilachanellangel/">Contact Me</a>
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
      <div className="aboutText">
        <h1>About lib/Rated</h1>
        <p>lib/Rated is a place where book lovers can come and organize their favorite books, rate them for others, and share in a community.</p>
        <p>Start by searching the immense database for your favorite novels, autobiographies, and more. Check out new releases, classics and everything in between. When you see a book you would like to add to your favorites list, click the addition icon to add it to your personal library. Check out your library and even pull up the online version in Google! Rate your books and compare with others.</p>
        <p>Share your library with friends, family or strangers. Connect with others on your favorite topics, and compare your lists. Never stop reading and learning!</p>
        <hr/>
        <h2>Meet the Developers</h2>
        <Us />
      </div>

    )
  }
}

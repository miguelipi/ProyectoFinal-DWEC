import '../styles/video.css';

function Video() {
  return (
    <div className="video-container">
          {/* Video */}
          <video autoPlay muted loop>
            <source
              src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
              type="" />
          </video>
          {/* texto superpuesto */}
          <div className="overlay-text">
            <p className="mb-0">Bienvenido a</p>
            <img src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&amp;fit=fill&amp;q=80&amp;w=300"
              alt="" className="img-fluid w-75 mx-auto" data-testid="masthead-logo" />
            <p className="fs-5 mt-4 text-white-50">Un shooter tactico 5v5</p>
          </div>
        </div>
  )
}

export default Video
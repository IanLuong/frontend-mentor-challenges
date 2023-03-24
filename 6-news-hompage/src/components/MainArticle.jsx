import mainImageMobile from '/images/image-web-3-mobile.jpg'
import mainImageDesktop from '/images/image-web-3-desktop.jpg'

const MainArticle = () => {
  return (
    <section className="main-article">
      <picture className="main-article-image" alt="Web3" title="Web3">
        <source srcSet={`${mainImageMobile} 1x`} media="(max-width: 700px)" />
        <img
          className="main-article-image"
          srcSet={`${mainImageDesktop} 2x`}
          alt="Web3"
          title="Web3"
        />
      </picture>
      <div className="main-article-text">
        <h1 className="main-article-text-title">
          The Bright Future of Web 3.0?
        </h1>
        <div className="main-article-text-other">
          <p className="main-article-text-desc">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="main-article-button">READ MORE</button>
        </div>
      </div>
    </section>
  )
}

export default MainArticle

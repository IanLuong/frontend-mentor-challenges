const NewArticleSection = () => {
  return (
    <section className="new-article-list">
      <h3 className="new-article-list-title">New</h3>
      <div className="new-article-list-item">
        <a href="#" className="new-article-list-item-title">
          Hydrogen Vs Electric Cars
        </a>
        <p className="new-article-list-item-desc">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <hr className="div-line" />
      <div className="new-article-list-item">
        <a href="#" className="new-article-list-item-title">
          The Downsides of AI Artistry
        </a>
        <p className="new-article-list-item-desc">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr className="div-line" />
      <div className="new-article-list-item">
        <a href="#" className="new-article-list-item-title">
          Is VC Funding Drying Up?
        </a>
        <p className="new-article-list-item-desc">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  )
}

export default NewArticleSection

const TopArticle = ({ article }) => {
  const { image, number, title, desc } = article

  return (
    <div className="top-article">
      <img
        className="top-article-image"
        src={image}
        alt={title}
        title={title}
      />
      <div className="top-article-text">
        <span className="top-article-number">{number}</span>
        <h4 className="top-article-title">{title}</h4>
        <p className="top-article-desc">{desc}</p>
      </div>
    </div>
  )
}

export default TopArticle

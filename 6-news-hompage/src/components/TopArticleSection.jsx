import retroImage from '/images/image-retro-pcs.jpg'
import laptopImage from '/images/image-top-laptops.jpg'
import gamingImage from '/images/image-gaming-growth.jpg'
import TopArticle from './TopArticle'

const articles = [
  {
    number: '01',
    image: retroImage,
    title: 'Reviving Retro PCs',
    desc: 'What happens when old PCs are given modern upgrades?',
  },
  {
    number: '02',
    image: laptopImage,
    title: 'Top 10 Laptops of 2022',
    desc: 'Our best picks for various needs and budgets.',
  },
  {
    number: '03',
    image: gamingImage,
    title: 'The Growth of Gaming',
    desc: 'How the pandemic has sparked fresh opportunities.',
  },
]

const TopArticleSection = () => {
  return (
    <section className="top-article-section">
      {articles.map((article) => (
        <TopArticle key={article.number} article={article} />
      ))}
    </section>
  )
}

export default TopArticleSection

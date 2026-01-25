import { articlessection } from "../constant";
import ArticleCard from "./ui/articleCard"
import '../styles/ArticleCard.css'
const ArticlesSection = () => {
  return (
    <section className="b2b-article-section">
    <div className="b2b-container">
      <h2 className="article-section-title">Artikelen</h2>
      <div className="b2b-articles-grid">
        {articlessection.map((art, index) => (
          <ArticleCard key={index} {...art} />
        ))} 
      </div>
    </div>
    </section>
  );
};

export default ArticlesSection;
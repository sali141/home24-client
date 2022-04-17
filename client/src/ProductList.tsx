import React from 'react';
import ArticleCard from './components/ArticleCard/ArticleCard';
import { intlCategoryID } from './constants/commonConst';
import './ProductList.css';
import Sidebar from './shared/Sidebar/Sidebar';
import { Article, Category } from './types';
import { getCategories } from './utils/apiUtils';
import loading from './assets/img/loading.gif';
import Pagination from 'react-responsive-pagination';

type Props = {
  searchText: string;
};

type State = {
  categories: Category[];
  articles: Article[];
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
};

class ProductList extends React.Component<Props, State> {
  state: State = {
    categories: [],
    articles: [],
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 8,
  };

  componentDidMount() {
    getCategories(intlCategoryID).then((response) => {
      const totalPages = Math.floor(response[0].categoryArticles.articles.length / this.state.itemsPerPage);
      this.setState({ categories: response, articles: response[0].categoryArticles.articles, totalPages: totalPages });
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.searchText !== this.props.searchText) {
      if (this.props.searchText.length > 1) {
        const filteredArticles = this.state.articles.filter((a) => a.name.includes(this.props.searchText));
        this.setState({ articles: filteredArticles });
      } else {
        this.setState({ articles: this.state.categories[0].categoryArticles.articles });
      }
    }
  }

  setCurrentPage = (e: number) => {
    this.setState({ currentPage: e });
  };

  render() {
    const { currentPage, itemsPerPage, totalPages, articles, categories } = this.state;
    let items = (this.props.searchText.length > 1) ? articles : articles.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);;

    return categories.length ? (
      <>
        <Sidebar childrenCategories={categories[0].childrenCategories} />
        <div className={'content'}>
          <h1>
            {this.state.categories[0].name}
            <small> ({categories[0].articleCount})</small>
            {this.props.searchText.length > 1 && <em>Filtered by : {this.props.searchText}</em>}
          </h1>

          <div className={'articles'}>
            {items.length ? (
              items.map((article, index) => <ArticleCard key={index} article={article} />)
            ) : (
              <div className="error-msg">No matching records found</div>
            )}
          </div>
          {this.props.searchText.length === 0 && items.length && <Pagination current={currentPage} total={totalPages} onPageChange={this.setCurrentPage} />}
        </div>
      </>
    ) : (
      <div className={'loading'}>
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default ProductList;

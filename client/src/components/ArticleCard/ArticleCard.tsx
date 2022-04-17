import * as React from 'react';
import { intlNumberFormatValues } from '../../constants/commonConst';
import { Article } from '../../types';
import { currencyFormatter } from '../../utils/commonUtils';
import './ArticleCard.css'

type Props = {
  article: Article;
};

class ArticleCard extends React.Component<Props> {

  render () {
    const formatter = currencyFormatter(intlNumberFormatValues);
    return (
      <div className={'article'}>
        <img alt="article.name}" src={this.props.article.images[0].path} />
        <div>{this.props.article.name}</div>
        <div className='article-price'>{formatter.format(this.props.article.prices.regular.value / 100)}</div>
        <section role="button">Add to cart</section>
      </div>
    )
  }
}

export default ArticleCard
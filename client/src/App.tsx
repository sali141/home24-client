import * as React from 'react';
import ProductList from './ProductList';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

type State = {
  searchText: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    searchText: '',
  };

  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div className={'page'}>
        <Header onSearch={this.handleSearch} />
        <ProductList searchText={this.state.searchText} />
        <Footer />
      </div>
    );
  }
}

export default App;

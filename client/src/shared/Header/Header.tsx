import * as React from 'react';
import logo from '../../assets/img/home-24-logo.svg';
import './Header.css';

type Props = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type State = {
  searchText: string;
};

class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className={'header'}>
        <a href={`/`}>
          <img alt="home24" className="header-logo" src={logo} />
        </a>
        <input placeholder={'Search'} onChange={this.props.onSearch} />
      </div>
    );
  }
}

export default Header;

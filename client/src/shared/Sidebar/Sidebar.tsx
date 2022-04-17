import * as React from 'react';
import { ChildCategory } from '../../types';
import './Sidebar.css';
import menuIcon from '../../assets/img/hamburger-menu.png';
import closeIcon from '../../assets/img/close.png';

type Props = {
  childrenCategories: ChildCategory[];
};

type State = {
  showMobileMenu: boolean;
};

class Sidebar extends React.Component<Props, State> {
  state: State = {
    showMobileMenu: false,
  };

  render() {
    const { childrenCategories } = this.props;
    return (
      <>
        <div className={'menuicon'}>
          <img src={menuIcon} alt='open menu' onClick={() => this.setState({ showMobileMenu: true })} />
        </div>
        <div className={this.state.showMobileMenu ? 'sidebar open' : 'sidebar'}>
          <div className={'closeicon'}>
            <img src={closeIcon} alt='close menu' onClick={() => this.setState({ showMobileMenu: false })} />
          </div>
          <h3>Kategorien</h3>
          {childrenCategories.length ? (
            <ul>
              {childrenCategories.map(({ name, urlPath }, index) => {
                return (
                  <li key={index}>
                    <a href={`/${urlPath}`}>{name}</a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={'loading'}>Loading...</div>
          )}
        </div>
      </>
    );
  }
}

export default Sidebar;

import React, { Component } from 'react';
import styles from './Searchbar.module.css';
import SearchIcon from 'components/Icons/SearchIcon';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(event) {
    const value = event.target.value;
    this.setState({ searchValue: value });
    this.props.onSearchChange(value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.iconbox}>
            <SearchIcon />
          </div>
          <input
            className={styles.input}
            placeholder="Search..."
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;

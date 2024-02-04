import React, { Component } from 'react';
import styles from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import Gallery from './Gallery/Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handleSearchChange = value => {
    this.setState({ searchValue: value });
    console.log(value);
  };

  render() {
    return (
      <div className={styles.container}>
        <Searchbar onSearchChange={this.handleSearchChange} />
        <main className={styles.main}>
          <Gallery searchValue={this.state.searchValue} />
        </main>
      </div>
    );
  }
}

export default App;

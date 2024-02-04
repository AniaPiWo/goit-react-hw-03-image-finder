import React, { Component } from 'react';
import styles from './GalleryItem.module.css';

class GalleryItem extends Component {
  render() {
    const { key, imageUrl, alt } = this.props;

    return (
      <li>
        <img className={styles.item} key={key} src={imageUrl} alt={alt} />
      </li>
    );
  }
}

export default GalleryItem;

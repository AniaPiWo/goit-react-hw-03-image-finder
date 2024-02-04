import React, { Component } from 'react';
import styles from './GalleryItem.module.css';
import Modal from '../Modal/Modal';

class GalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleImageClick = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { imageUrl, largeImageURL, alt } = this.props;
    const { showModal } = this.state;

    return (
      <li>
        <img
          className={styles.item}
          src={imageUrl}
          alt={alt}
          onClick={this.handleImageClick}
        />

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onClose={this.handleCloseModal}
          />
        )}
      </li>
    );
  }
}

export default GalleryItem;

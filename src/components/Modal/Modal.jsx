import React, { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  render() {
    const { largeImageURL, alt, onClose } = this.props;
    console.log(largeImageURL);
    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent}>
          <img src={largeImageURL} alt={alt} />
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;

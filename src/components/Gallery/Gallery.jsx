import React, { Component } from 'react';
import styles from './Gallery.module.css';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoading: false,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ images: [], currentPage: 1 }, () => {
        this.fetchImages();
      });
    } else if (prevState.currentPage !== this.state.currentPage) {
      this.fetchImages();
    }
  }

  fetchImages() {
    const API_KEY = '42205267-7cdd22bea4d61f392d799cc6a';
    const searchQuery = encodeURIComponent(this.props.searchValue);
    const { currentPage } = this.state;

    if (!API_KEY || !searchQuery) {
      console.error('API key or search query is missing.');
      this.setState({ images: [] });
      return;
    }

    this.setState({ isLoading: true });

    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (parseInt(data.totalHits) > 0) {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
        } else {
          console.log('No hits');
          this.setState({ images: [] });
        }
      })
      .catch(error => console.error('Error fetching images:', error))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleLoadMore = event => {
    event.preventDefault();
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <div className={styles.gallery}>
        {isLoading ? (
          <Loader />
        ) : images.length > 0 ? (
          <>
            <ul className={styles.list}>
              {images.map(image => (
                <GalleryItem
                  key={image.id}
                  imageUrl={image.webformatURL}
                  alt={image.tags}
                />
              ))}
            </ul>
            <Button onClick={this.handleLoadMore} />
          </>
        ) : (
          <div>No images</div>
        )}
      </div>
    );
  }
}

export default Gallery;

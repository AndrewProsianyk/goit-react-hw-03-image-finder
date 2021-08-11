import React, { Component } from 'react';
import ImgApi from './ImgApi'
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import styles from './App.module.css';


class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    tags: '',
    error: '',
    largeImageURL:''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits()
    }

    if (this.state.searchQuery !== 2 && prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchHits = () => {
    const { searchQuery, currentPage } = this.state;
    const options = {
      searchQuery,
      currentPage
    }
    
    this.setState({ isLoading: true })
    
    ImgApi(options).then(hits => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        cuttentPage:prevState.currentPage + 1
      }))
    })
      .catch(error => this.setState({ error: 'No pictures found' })).finally(() => this.setState({
        isLoading:false
      }))
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null
    })
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  onOpenModalImg = (largeImageURL = '') => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };


  render() {
    const { hits, isLoading, showModal, largeImageURL, tags, error } = this.state;
    return (
      <>
        <Searchbar
          onSubmit={this.onChangeQuery}
        />
        {error && <p>{error}</p>}

        <ImageGallery
          hits={hits}
          onOpenModalImg={this.onOpenModalImg}
        />

        {/* {isLoading && <loader/>} */}
        {hits.length > 11 && !isLoading && (
          <button onClick={this.fetchHits}/>
        )}

        {showModal && (
          <Modal>
            <img src={largeImageURL} alt={tags}/>
          </Modal>
        )}
      </>
    )
  }
}

export default App;

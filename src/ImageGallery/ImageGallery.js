import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({hits, onOpenModalImg})=> {
    return (
        <ul className={styles.ImageGallery}>
            {hits.map(({ id, webformatURL, LargeImageURL }) => {
                const handleImgClick=()=>onOpenModalImg(LargeImageURL)
                return (
                    <li key={id}>
                        <ImageGalleryItem
                            webformatURL={webformatURL}
                            onClick={handleImgClick}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
export default ImageGallery;
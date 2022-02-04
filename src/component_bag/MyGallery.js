import ImageGallery from 'react-image-gallery';
import React, { Component } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: 'https://source.unsplash.com/user/nathan',
    thumbnail: 'https://source.unsplash.com/user/nathan',
  },
  {
    original: 'https://source.unsplash.com/user/nat',
    thumbnail: 'https://source.unsplash.com/user/nat'
  },
  {
    original: 'https://source.unsplash.com/user/erondu',
    thumbnail: 'hhttps://source.unsplash.com/user/erondu',
  },
];

class MyGallery extends Component {
  render() {
    return <ImageGallery style={{borderRadius:"30px",  minHeight:"500px"}} items={images} />;
  }
}

export default MyGallery;
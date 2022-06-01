import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import './styles.css';

import JSImage from './assests/pexels-pixabay-39317.jpg'

export default class Slider extends Component {
  
  state = {
    goToSlide: 0,
    offsetRadius: 10,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src={JSImage} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage}  alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage}  alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage}  alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage}  alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src={JSImage}  alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    
    return (
      <div className={'imageContainer'} >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

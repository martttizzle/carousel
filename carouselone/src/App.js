import React, { Component } from 'react';
import './App.css';
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";




const styles = { height: 400, width: "100%" };

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="fa fa-glass" />,
        rightIcon: <span className="fa fa-music" />
      });
    }
  };
  render() {

    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 10 }}>
            <React_Bootstrap_Carousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={4000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              <div style={{ height: 500 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={require('./g1.jpg')}
                />
              </div>
              <div style={{ height: 500 }}>
              <img
                  style={{ width: "100%", height: "100%" }}
                  src={require('./g2.jpg')}
                />
              </div>
              <div style={{ height: 500 }}>
              <img
                  style={{ width: "100%", height: "100%" }}
                  src={require('./g3.jpg')}
                />
              </div>
              
            </React_Bootstrap_Carousel>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

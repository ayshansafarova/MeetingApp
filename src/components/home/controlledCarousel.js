import React, {Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    
      render() {
        const { index, direction } = this.state;
    
        return (
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.w3schools.com/booTsTrap/ny.jpg"
                alt="New York"
              />
              <Carousel.Caption>
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.w3schools.com/booTsTrap/chicago.jpg"
                alt="Chicago"
              />
    
              <Carousel.Caption>
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.w3schools.com/booTsTrap/la.jpg"
                alt="Los Angeles"
              />
    
              <Carousel.Caption>
                <h3>Los Angeles</h3>
                <p>
                 LA is always so much fun!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
}

export default ControlledCarousel;

// render(<Carousel />);
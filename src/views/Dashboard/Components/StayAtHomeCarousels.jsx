import React, { Component } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";
import StayAtHomeTabs from "./StayAtHomeTabs";
import StayAtHomeProgram from "./StayAtHomeProgram";

import image1 from "../../../assets/img/lawan_covid_dengan_inovasi.jpg";
import image3 from "../../../assets/img/idcamp_scholarship.jpg";
import image2 from "../../../assets/img/doa_melawan_covid.jpg";

const items = [
  {
    src: image1,
    altText: "Lawan Covid Dengan Inovasi",
    caption: "",
  },
  {
    src: image2,
    altText: "Do'a Terhindar Dari Wabah Penyakit",
    caption: "",
  },
  {
    src: image3,
    altText: "IDCamp Scholarship",
    caption: "",
  },
];

class StayAtHomeCarousels extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides2 = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.custom-tag {
              max-width: 100%;
              height: 325px;
              background: black;
            }`}
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides2}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default StayAtHomeCarousels;

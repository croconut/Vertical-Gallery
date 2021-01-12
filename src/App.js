import React from "react";
import VerticalGallery from "./verticalGallery.js";
import bg from "./bg.jpg";
import bg2 from "./bg2.jpg";
import blur from "./blur5.png";

export default function App() {
  const blurUrl = "url(" + blur + ")";
  const blah = "1";
  return (
    <VerticalGallery
      uniqueName="gallery1"
      blurImage={blurUrl}
      transitionTime={blah}
      width="400px"
      height="500px"
    >
      <div bgstyle={{ backgroundImage: `url(${bg})` }}>
        <h1>Sup</h1>
        Hey whats up, this is a long text for testing purposes. Hey whats up,
        this is a long text for testing purposes. Hey whats up, this is a long
        text for testing purposes. Hey whats up, this is a long text for testing
        purposes. Hey whats up, this is a long text for testing purposes. Hey
        whats up, this is a long text for testing purposes. Hey whats up, this
        is a long text for testing purposes. Hey whats up, this is a long text
        for testing purposes. Hey whats up, this is a long text for testing
        purposes. Hey whats up, this is a long text for testing purposes. Hey
        whats up, this is a long text for testing purposes. Hey whats up, this
        is a long text for testing purposes. Hey whats up, this is a long text
        for testing purposes. Hey whats up, this is a long text for testing
        purposes. Hey whats up, this is a long text for testing purposes. Hey
        whats up, this is a long text for testing purposes. Hey whats up, this
        is a long text for testing purposes. Hey whats up, this is a long text
        for testing purposes.
      </div>
      <div bgstyle={{ backgroundImage: `url(${bg2})` }}>How are ya?</div>
      <div bgstyle={{ backgroundImage: `url(${bg})` }}>great yeah?</div>
      <div bgstyle={{ backgroundImage: `url(${bg2})` }}>How are ya?</div>
    </VerticalGallery>
  );
}

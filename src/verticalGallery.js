import React from "react";
import "./styles.css";

const VerticalGallery = ({
  uniqueName,
  blurImage,
  transitionTime,
  height,
  width,
  style,
  children
}) => {
  // these are based on the original transition, which is the duration
  // to expand the gallery item. the blur effect happens with transition2
  // and the inner component starts appearing after everything else
  // has finished animating, but faster than the original transition
  const transition2 = transitionTime * 1.3;
  const transition3 = transitionTime * 0.5;
  const inputs = React.Children.map(children, (_child, i) => {
    const panel = uniqueName + "-panel-" + i;
    return (
      <input
        type="radio"
        name={uniqueName}
        className="gallery-input"
        key={`input${i}`}
        id={panel}
        onChange={() => {}}
      />
    );
  });
  const items = React.Children.map(children, (Child, i) => {
    const panel = uniqueName + "-panel-" + i;
    const { bgstyle } = Child.props;
    const innerStyle = Child.props.style;
    const grandchildren = Child.props.children;
    return (
      <label
        className="gallery-label"
        htmlFor={panel}
        key={`item${i}`}
        style={{ transition: `flex ${transitionTime}s ease` }}
      >
        <div className="gallery-item" style={bgstyle}>
          <div className="gallery-after-click" style={{ height: height }}>
            <div
              className="gallery-text-bg"
              style={{
                backgroundImage: blurImage,
                transition: `opacity ${transition2}s ease`
              }}
            >
              <div
                className="gallery-text-area"
                style={{
                  ...innerStyle,
                  ...{
                    transition: `opacity ${transition3}s ease ${transitionTime}s`
                  }
                }}
              >
                {grandchildren}
              </div>
            </div>
          </div>
        </div>
      </label>
    );
  });

  // the below function is ~30x faster than this one
  // and similar functions that use the vanilla approach
  /*
  const func2 = (arr, arr2) => arr.reduce(
    (combArr, elem, i) => combArr.concat(elem, arr2[i]), 
    []);
  }
  */

  const interleaveArrays = (inputs, items) => {
    let newArr = Array(inputs.length + items.length);
    let small = Math.min(inputs.length, items.length);
    let large = newArr.length - small;
    let k = 0;
    for (let i = 0; i < small; i++) {
      newArr[k++] = inputs[i];
      newArr[k++] = items[i];
    }
    if (inputs.length < items.length)
      for (let i = small; i < large; i++) newArr[k++] = items[i];
    else for (let i = small; i < large; i++) newArr[k++] = inputs[i];
    return newArr;
  };

  const finalArray = interleaveArrays(inputs, items);

  return (
    <div className="gallery-wrap" style={{ ...style, ...{ width: width } }}>
      {finalArray}
    </div>
  );
};

export default VerticalGallery;

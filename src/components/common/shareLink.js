import React, { Fragment } from "react";
import { env } from "../../utils/helpers";
import styled from "styled-components";
const ShareLink = props => {
  return (
    <Fragment>
      <StyledShareLink
        href={`https://twitter.com/intent/tweet?text=${
          props.title
        }&url=${env.url + props.id}`}
      >
        <div className="share-button">
          <div className="wrapper  flex">
            <span className="icon">
              <svg
                className="svg"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.414"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="title"
                viewBox="0 0 32 32"
                preserveAspectRatio="xMidYMid meet"
                id="twitter"
              >
                <title id="title">twitter</title>
                <g>
                  <path d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z" />
                </g>
              </svg>
            </span>
          </div>
          <span className="share-with geo">Share With Twitter</span>
        </div>
      </StyledShareLink>
    </Fragment>
  );
};

const ShareIt = props => {
  return (
    <Fragment>
      <StyledShareIt>
        <h1> Love the Article ? Spread it</h1>
        <span> Love the Article ? Let it reach others </span>
        <span role="img" aria-label="smiley">
          😊
        </span>
        <ShareLink {...props} />
      </StyledShareIt>
    </Fragment>
  );
};

const StyledShareLink = styled.a`
  text-decoration: none;
  font-family: "Book";
  .share-button {
    width: 180px;
    border-radius: 8px;
    background: rgb(0, 172, 237);
    padding: 10px 20px;
    color: white;
    display: flex;
    align-items: center;
    margin: 20px 0;
    justify-content: space-between;
  }

  .icon {
    display: inline-block;
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    position: relative;
    color: inherit;
  }

  svg {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    color: inherit;
    fill: white;
  }
  .share-with {
    margin: auto 0;
  }
`;

const StyledShareIt = styled.div`
  margin-top: 50px;
  font-family: "Book";

  h1 {
    letter-spacing: 0.2px;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export default ShareIt;

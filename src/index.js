import React from "react";
import ReactDOM from "react-dom";

import GlassExample from "./GlassExample";



const image = require("./proofs-red.jpg");
const largeImage = require("./proofs-green.jpg")
const urlImage = 'https://64.media.tumblr.com/10054a78a9ba90bd21c3ea516fe21f4b/215852e55928b021-e6/s1280x1920/356a448e67f53798897db0eab8bad5c1ce46578f.jpg';
const bwUrlImage = 'https://64.media.tumblr.com/0488a9ce0b030bd74afdf833f9429942/a3caf4508a1afde7-0f/s1280x1920/c0d44b570ceea3a0ad1b147b779e2f06c085458e.jpg';
const redUrlImage = 'https://64.media.tumblr.com/3cf4bf78df1630a542c8f6f300263606/8c1258214b4b7083-5c/s1280x1920/8d3d29b39cabd65fd10666d106812f4692d6d4ac.jpg';

const DemoApp = () => {
  return (
    <React.Fragment>
      <div style={{ padding: "1rem", maxWidth: "832px" }} className="app">
        <GlassExample image={redUrlImage} largeImage={urlImage}  />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<DemoApp />, document.getElementById("root"));

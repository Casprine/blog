import React, { Fragment } from "react";
import tags from "../../data/index";
import Tag from "./tag";

const Tags = () => {
  return (
    <Fragment>
      <div className="tags center">
        {tags.map((tag, i) => (
          <Tag {...tag} key={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default Tags;

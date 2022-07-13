import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id, title, content } = useParams();
  return (
    <div>
      id:{id}
      title:{title}
      content: {content}
    </div>
  );
};

export default Detail;

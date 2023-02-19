import React from "react";

const Message = ({ msg }) => {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "bold",
    color: "#00a1a7",
  };

  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;

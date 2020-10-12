import React from 'react';

export default props => {
  return (
    <>
      <h1>Goodbye {props.match.params.name || 'User'}!</h1>
    </>
  );
};
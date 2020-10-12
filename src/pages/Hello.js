import React from 'react';

export default props => {
  return (
    <>
      <h1>Hello {props.match.params.name || 'User'}!</h1>
      <a href={`/bye/${props.match.params.name || 'User'}`}>Exit</a>
    </>
  );
};
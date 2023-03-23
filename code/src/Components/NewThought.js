import React, { useState } from 'react';
// The newMessage state is passed in as a prop to the component
// The handleNewThoughtsChange function is called when
// the user interacts with the input field and and onFormSubmit when user submits the form.
export const NewThought = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  const [remainingChars, setRemainingChars] = useState(160 - newMessage.length);

  /* This state variable to hold the remaining characters
  count, and then update it every time the user types in the input field. */
  const handleInputChange = (event) => {
    const input = event.target.value;
    const remaining = 160 - input.length;
    setRemainingChars(remaining);
    handleNewThoughtsChange(event);
  };

  return (
    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-text">Share a happy thought!</p>
      <textarea
        placeholder="What's on your mind?"
        value={newMessage}
        onChange={handleInputChange} />
      <div className="main">
        <div className="char-count">{remainingChars} characters remaining</div>
        <button className="submit-btn" type="submit" disabled={newMessage.length < 1 || newMessage.length > 160}>
          :heart: Send a Happy Thought :heart:
        </button>
      </div>
    </form>
  );
};

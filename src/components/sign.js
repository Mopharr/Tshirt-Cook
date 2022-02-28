import React from 'react'

const sign = ({modal}) => {
  return (
    <div>
      {modal ? (
        

        <div className='mmodal'>
          <a href="/login">Login</a>
          <a href="/register">SignUp</a>
        </div>
      ) : null}
    </div>
  );
}

export default sign
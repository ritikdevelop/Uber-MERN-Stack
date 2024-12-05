import React from 'react'

const UserLogin = () => {
  return (
    <div className=''>
        <form>
            <h3>What's your email</h3>
            <input type="email" placeholder='Enter your email' required />
            <h3>What's your password</h3>
            <input type="password" placeholder='password' required />
            <button>Login</button>
        </form>
    </div>
  )
}

export default UserLogin;
import { useRef } from 'react'
import { loginUser } from '../../api/users'

import Navbar from "../commons/Navbar";

export default function Login({ setToken }) {
  const username = useRef('')
  const password = useRef('')
  const LoginUser = async (e) => {
    e.preventDefault()
    const body = {
      username: username.current.value,
      password: password.current.value
    }
    // Handle login logic
    if (!body.username || !body.password) {
      alert('You need to input an username and password')
    } else {
      const user = await loginUser(body.username, body.password)
      if (user) {
        localStorage.setItem('userId', user.id)
        localStorage.setItem('username', user.username)
        setToken(user);
      } else {
        alert('Invalid username or password')
      }
    }
  }

  return(
    <div style={{"textAlign": "center"}}>
      <Navbar />

      <div className="main" style={{"minHeight": "86vh"}}>
        <h1 className="heading">Login</h1>
        <p className="subheading">
          oh hey you found our super hidden admin page<br/>
          pls dont hack us
        </p>

        <form>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input ref={username} name="username" className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input ref={password} name="password" className="input" type="password" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button onClick={LoginUser} className="button is-primary" type="submit">Submit</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}
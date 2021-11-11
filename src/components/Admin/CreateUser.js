import React, { useRef } from "react";

import { createUser } from "../../api/users";

export default function CreateUser (props) {
  const name = useRef('')
  const username = useRef('')
  const password = useRef('')

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!name.current.value || !username.current.value || !password.current.value) {
      alert('You need fill up all the fields')
    } else {
      const data = {
        name: name.current.value,
        username: username.current.value,
        password: password.current.value
      };
      createUser(data.name, data.username, data.password)
      .then(res => {
        alert('User added')
      })
      .catch(error => console.error('Error: ', error.message));
    }
  }

  return (
    <form>
      <div className="field">
        <label className="label">Name*</label>
        <div className="control">
          <input className="input" ref={name} type="text" name="name" placeholder="Name" required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Username*</label>
        <div className="control">
          <input className="input" ref={username} type="text" name="username" placeholder="Username"  required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Password*</label>
        <div className="control">
          <input className="input" ref={password} type="password" name="password" placeholder="Password"  required/>
        </div>
      </div>
      <div className="field">
        <button className="button is-primary" onClick={handleCreate}  type="submit">Create</button>
      </div>
    </form>
  );
}
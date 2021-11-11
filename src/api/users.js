import { client, q } from '../config/db.js'
import bcrypt from 'bcryptjs'

export const createUser = async (name, username, password) => {
  password = bcrypt.hashSync(password, bcrypt.genSaltSync(10)) //hashes the password
  let data
  try {
    data = await client.query(
      q.Create(
        q.Collection('users'),
        {
          data: {
            name,
            username,
            password
          }
        }
      )
    )
    if (data.name === 'BadRequest') return // if there's an error in the data creation
  } catch (error) {
    return
  }
  const user = data.data
  user.id = data.ref.value.id // attaches the ref id as the user id in the client
  return user
}

export const getUser = async (userId) => {
  try {
    const user = await client.query(
      q.Get(
        q.Ref(q.Collection('users'), userId)
      )
    )
    return user.data
  } catch {
    return // return null if there is any error.
  }
}

export const loginUser = async (username, password) => {
  try {
    let userData = await client.query(
      q.Get(
        q.Match(q.Index('user_by_username'), username)
      )
    )
    userData.data.id = userData.ref.value.id
    if (bcrypt.compareSync(password, userData.data.password)) return userData.data
    else return
  } catch (error) {
    return
  }
}
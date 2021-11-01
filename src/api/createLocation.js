import { client, q } from '../config/db.js'

const createLocation = (data) =>
  client
    .query(
      q.Create(q.Collection('locations'), {
        data: data
      })
    );

export default createLocation;
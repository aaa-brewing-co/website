import { client, q } from '../config/db.js'

const createLocation = (name, price, address, lon, lat) =>
  client
    .query(
      q.Create(q.Collection('locations'), {
        data: {
          name,
          price,
          address,
          lon,
          lat,
        }
      })
    )
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));

export default createLocation;
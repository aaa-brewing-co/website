import { client, q } from '../config/db'

const editLocation = (refId, name, price, address, lon, lat) => client.query(
  q.Update(
    q.Ref(q.Collection('locations'), refId),
    { data: {
      name: name,
      price: price,
      address: address,
      lon: lon,
      lat: lat,
    } },
  )
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))


export default editLocation;
import { client, q } from '../config/db'

const editLocation = (refId, data) => client.query(
  q.Update(
    q.Ref(q.Collection('locations'), refId), {
      data: data
    })
);

export default editLocation;
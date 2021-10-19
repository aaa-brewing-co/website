import { client, q } from '../config/db.js'

const deleteLocation = refId =>
  client
    .query(q.Delete(q.Ref(q.Collection('locations'), refId)))
    .then(ret => ret)
    .catch(error => console.error('Error: ', error.message));

export default deleteLocation;
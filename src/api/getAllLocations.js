import { client, q } from '../config/db.js'

const getAllLocations = client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/all_locations')))
)
  .then(response => {
    const locationsRefs = response.data
    const getAllProductDataQuery = locationsRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllProductDataQuery).then((data) => data)
  })
  .catch(error => console.warn('error', error.message))

export default getAllLocations;
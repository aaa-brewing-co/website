import untappd from "../../../assets/untappd.png"

export default function Locations({ locations, filterText, filterTypes }) {
  const rows = []
  let count = 0;

  /* TODO - LIMIT TO 6 + SHOW MORE */
  locations.forEach((location) => {
    if (location.data.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
      return
    }
    const type = location.data.type
    if (!filterTypes.some(i => type.includes(i))) {
      return
    }

    const directionsLink = "https://www.google.com/maps/dir//"+location.data.name
    rows.push(
      <div className="place" key={location.ref.id}>
        <h2>{location.data.name}</h2>
        <div className="meta">
          <div className="price">
            {location.data.price ? <Price price={location.data.price} /> : ''}
          </div>
          {location.data.untappd ? <UntappdButton href={location.data.untappd} /> : ''}
        </div>
        <div className="details">
          <p>Tumeric kogi truffaut, ugh migas gluten-free flannel. Glossier enamel pin synth, tbh tattooed you probably haven't heard of them tumeric williamsburg.</p>
          <br/>
          <p>{location.data.address}</p>
          <p className="links">
            {location.data.website ? <a href={location.data.website} target="_blank" rel="noreferrer noopener">Website</a> : ''}
            {location.data.googleMap ? <a href={location.data.googleMap} target="_blank" rel="noreferrer noopener">Google Maps</a> : ''}
            <a href={directionsLink} target="_blank" rel="noreferrer noopener">Directions</a>
          </p>
        </div>
      </div>
    )
    count++
  })

  return (
    <>
      <div>Count: {count}</div>
      <div className="places">
        {!rows.length ? <h1 className="mx-auto my-6">No spots found.</h1> : rows}
      </div>
    </>
  )
}

function Price({price}) {
  let value = price
  let dollars = ""
  for (var i = 0; i < value; i++) {
    dollars += "$"
  }
  return (
    dollars
  )
}

function UntappdButton({href}) {
  return (
    <div className="untappd">
      <a href={href} target="_blank" rel="noreferrer noopener">
        <img src={untappd} className="untappd-logo" alt="Untappd Logo" loading="lazy" />
      </a>
    </div>
  )
}

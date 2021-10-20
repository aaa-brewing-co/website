import React, { useRef } from "react";

import { createLocation  } from "../../api";

function CreateForm() {
  const name = useRef('')
  const price = useRef('')
  const address = useRef('')
  const lon = useRef('')
  const lat = useRef('')

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!name.current.value || !price.current.value || !address.current.value || !lon.current.value || !lat.current.value) {
      alert('You need fill up all the fields')
    } else {
      await createLocation(name.current.value,price.current.value,address.current.value,lon.current.value,lat.current.value)
      alert('Created location')
    }
  }

  return (
    <form>
      <div>
        <input ref={name} type="text" name="name" placeholder="Name" required/>
      </div>
      <div>
        <input ref={price} type="text" name="price" placeholder="Price"  required/>
      </div>
      <div>
        <input ref={address} type="text" name="address" placeholder="Address"  required/>
      </div>
      <div>
        <input ref={lon} type="text" name="lon" placeholder="Longitude"  required/>
      </div>
      <div>
        <input ref={lat} type="text" name="lat" placeholder="Latitude"  required/>
      </div>
      <button onClick={handleCreate}  type="submit">Create</button>
    </form>
  );
};

export default CreateForm;
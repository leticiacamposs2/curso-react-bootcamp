import React, {useState, useEffect} from 'react'

const People = () => {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://lv7gfyq1gc.execute-api.us-east-1.amazonaws.com/jsday/list")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.Items)
        },
        (error) => {
          setIsLoaded(false)
          setError(error)
        }
      )
  })

  const peopleList = () => {
    return (
      <div className="d-flex">
        {
          items.map(item => (
            <div key={item.id} class="card">
              <img src={item.photo} class="card-img-top" alt={`Foto de ${item.username}`} />
              <div class="card-body">
                <h5 class="card-title">{item.username}</h5>
                <p class="card-text">{item.job}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <>
      {
        error
          ? (
            <div>Error: {error.message}</div>
          ) : (
            isLoaded && peopleList()
          )
      }
    </>
  )
}

export default People

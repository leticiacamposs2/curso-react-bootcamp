import React, { useEffect, useState } from 'react';
import { Gif } from "@giphy/react-components";

function Giphy(props) {

    const [gifs, setGifs] = useState(null);
    const key = 'cUdC5Slzcn5tlczQGYIuGpBPLWGEdAc5'
    const query = props.search
    const limit = 5

    useEffect(() => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${limit}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setGifs(result)
                },
                (error) => {
                    console.log('error', error);
                }
            )
    }, [query])

    return (
        <>
            { gifs
                && gifs.data.map(gif => {
                    return <Gif key={gif.id} gif={gif} width={200} />
                })
            }
        </>
    )

}

export default Giphy;
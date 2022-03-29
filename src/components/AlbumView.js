// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AlbumView() {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView
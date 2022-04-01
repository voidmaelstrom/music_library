// These components will be making separate API calls from the app
// component to serve specific data about our artist
import '../App.css'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ArtistView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData ] = useState([])

    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    return (
        <div className='artistView'>
            {navButtons()}
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
            <p>{artistData}</p>
        </div>
    )
}

export default ArtistView
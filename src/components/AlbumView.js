// These components will be making separate API calls from the app
// component to serve specific data about a given album
import '../App.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function AlbumView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ albumData ] = useState([])

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
        <div className='albumView'>
            {navButtons()}
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
            <p>{albumData}</p>
        </div>
    )
}

export default AlbumView
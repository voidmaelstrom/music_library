// These components will be making separate API calls from the app
// component to serve specific data about a given album
import '../App.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AlbumView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const { results } = await response.json();
            setAlbumData(results);
        }
        id !== 'undefined' ? fetchData() : console.log(`ID passed is ${id}, stopped request`)
    }, [id]);

    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    const justSongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = justSongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div className='albumView'>
            {navButtons()}
            <h2>The id passed was: {id}</h2>
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>Loading...</h2>}
            {renderSongs}
        </div>
    )
}

export default AlbumView
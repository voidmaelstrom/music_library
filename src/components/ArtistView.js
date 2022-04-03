// These components will be making separate API calls from the app
// component to serve specific data about our artist
import '../App.css'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function ArtistView() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const { results } = await response.json();
            setArtistData(results);
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

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const renderAlbums = justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div className='artistView'>
            {navButtons()}
            <h2>The id passed was: {id}</h2>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading...</h2>}
            {renderAlbums}
        </div>
    )
}

export default ArtistView
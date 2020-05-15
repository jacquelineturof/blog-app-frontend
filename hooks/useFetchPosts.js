import { useState, useEffect } from 'react'

import axios from '../axios-backend'

const useFetchPosts = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('posts')
                if (!response.data.posts) {
                    throw new Error('Could not retrieve posts.')
                }

                setPosts(response.data.posts)
            } catch (e) {
                // TODO set up error state
                console.log(e)
            }
        }

        fetchData()
    }, [])

    return posts
}

export default useFetchPosts
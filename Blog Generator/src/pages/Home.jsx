import React, { useEffect, useState } from 'react'
import services from '../appwrite/conf'
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        services.getPosts()
        .then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if(posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Login to read Posts</h1>
                        </div>
                    </div>
                </Container>

            </div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <PostCard {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
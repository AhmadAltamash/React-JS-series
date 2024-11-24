import React from 'react'
import { Container, Post_Form } from '../components'

function AddPost({post}) {
  return (
    <div className='py-8'>
        <Container>
            <Post_Form post={post}/>
        </Container>
    </div>
  )
}

export default AddPost
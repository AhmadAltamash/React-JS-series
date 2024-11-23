import React,{useEffect, useState} from 'react'
import { Container, Post_Form } from '../components'
import services from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            services.getPost(slug)
            .then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <Post_Form post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
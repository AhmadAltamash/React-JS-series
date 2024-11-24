import React,{useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import services from '../appwrite/conf'
import {Button, Container} from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux';

export default function Post() {

    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if(slug) {
            services.getPost(slug).then((post) => {
                if(post) setPost(post)
                else navigate('/')
            })
        }
        else navigate('/')
    }, [slug,navigate])

    const deletePost = () => {
        services.deletePost(post.$id).then((status) => {
            if(status){
                services.deleteFile(post.featuredImage)
                navigate('/')
            }
        })
    }

  return (
    <div>Post</div>
  )
}

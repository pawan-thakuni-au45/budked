import React from 'react'
import { useState,useEffect } from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import { Form,Button,Row,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../component/FormContainer'
import Loader from '../component/Loader'
import {useLoginMutation} from '../slices/userApiSlice'
import {setCredentials} from '../slices/authSlice'
import {toast} from 'react-toastify'

const LoginScreen = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [login,{isLoading}]=useLoginMutation()

    const {userInfo}=useSelector((state)=>state.auth)

    const search=useLocation()
    const sp=new URLSearchParams(search)
    const redirect=sp.get('redirect') || '/'

    useEffect(()=>{
      if (userInfo){
        navigate(redirect)
      }

    },[userInfo,redirect,navigate])


    const submitHandler=async(e)=>{
      try{
         const res=await login({email,password}).unwrap();
         dispatch(setCredentials({...res}));
         navigate(redirect);


      }catch(error){
        toast.error(err?.data?.message||err.error)


      }
        e.preventDefault()
        

    }
  return (
    

    <FormContainer>
    
     <h1>Sign In</h1>
     <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
         <Form.Label>Email Address</Form.Label>
         <Form.Control
         type='email' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}

         ></Form.Control>
         
        
        </Form.Group>

        <Form.Group controlId='password'>
         <Form.Label>password</Form.Label>
         <Form.Control
         type='password' placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}

         ></Form.Control>

         
        
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-2'>

        Sign In
        
        </Button>
        </Form>

        <Row className='py-3'>
        <Col>
          New Coustmer? <Link to='/register'>Register</Link>
        </Col>
        </Row>

        </FormContainer>
   
  )
}

export default LoginScreen
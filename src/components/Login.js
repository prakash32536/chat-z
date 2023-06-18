import React from 'react'
import NavBar from './NavBar'
import {StyledDiv,StyledButton, StyledCard,StyledTypography} from './Styled'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

function Login({setIsAuth}) {
  
  
  const handaleClick = async() => {
    try{
    const result = await signInWithPopup(auth, provider)
    setIsAuth(true)
    cookies.set('auth-token',result.user.refreshToken)
    }catch(err){
       console.log(err)
    }
  }
  return (
    <div>
      <NavBar left={'Login to chat'} />
      <StyledDiv >
        <StyledCard  >
         <StyledTypography variant="h6"> welcome to CHAT-z</StyledTypography>
         <StyledButton onClick={handaleClick} variant="contained">Sign in with google</StyledButton>
        </StyledCard>
      </StyledDiv>

    </div>
  )
}

export default Login

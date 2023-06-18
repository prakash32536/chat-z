import React, {useState} from 'react'
import NavBar from './NavBar'
import {StyledDiv,StyledButtonRoom, StyledForm,StyledTypography, StyledTextField} from './Styled'
import { auth } from '../firebase'

const Room = (props) => {
  console.log(auth)
  const [roomName, setRoomName] = useState("")
 
  const handleChange = (e) =>{
    setRoomName(e.target.value)
  }
  const handlesubmit = (e)=>{
    e.preventDefault()
    props.onSubmit(roomName)
  }
  return (
    <div>
      <NavBar left ={ 'Logout' } />
      <StyledDiv >
        <StyledForm onSubmit={handlesubmit}  >
         <StyledTypography variant="h6"> Enter Room Name</StyledTypography>
         <StyledTextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleChange}
          value={roomName}
          autoComplete="off"
         />
         <StyledButtonRoom type='submit' variant="contained">Submit</StyledButtonRoom>
        </StyledForm>
      </StyledDiv>
    </div>
  )
}

export default Room

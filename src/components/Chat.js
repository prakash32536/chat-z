import React, { useState, useEffect, useRef } from 'react'
import NavBar from './NavBar'
import { StyledDivForChat,StyledImg,StyledDivForUserInfo,StyledMessageDiv, StyledBoxForChat,StyledTypography,StyledChatP, StyledTextFieldForChat, StyledFormForChatTextFieldAndButton, StyledBoxForChatsRender, StyledButtonForSendChat } from './Styled';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { auth } from '../firebase';
import "./Chat.css"

const Chat = ({ room }) => {
  console.log('auth.currentUser', auth.currentUser )

  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);


  const handleChange = (e) => {
    setNewMessage(e.target.value)
  }

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"))
    const unSubscribe =  onSnapshot(queryMessages, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
        setMessages(messages)
      })
    })

    return ()=> unSubscribe();

  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
      photoURL : auth.currentUser.photoURL
    })

    setNewMessage("")

  }

 // scroll
 const ScrollWhenRender = useRef(null);
 useEffect(() => {
  if (ScrollWhenRender.current) {
    ScrollWhenRender.current.scrollTop = ScrollWhenRender.current.scrollHeight;
  }
}, [messages]);

  return (
    <StyledDivForChat>
      <NavBar left={'Logout'} mid = {room} />
      <StyledBoxForChat>
        <StyledBoxForChatsRender ref={ScrollWhenRender} className='all_chat'>
         {messages.map((message)=>
            <StyledMessageDiv>
              <StyledDivForUserInfo>
                <StyledImg className="user_image" src={message.photoURL} alt='User Image'/>
                <StyledTypography variant="h6" sx={{fontWeight: "bold"}}>{message.user}</StyledTypography>
              </StyledDivForUserInfo>
              <StyledChatP sx={{ml:2}}>{message.text}</StyledChatP>
            </StyledMessageDiv>
            
         )}
        </StyledBoxForChatsRender>

        <StyledFormForChatTextFieldAndButton onSubmit={handleSubmit} >
          <StyledTextFieldForChat required onChange={handleChange} value={newMessage} inputProps={{ maxLength: 100 }} label="Text Message" autoComplete="off" />
          <StyledButtonForSendChat variant="contained" type='submit'>
            Send
          </StyledButtonForSendChat>
        </StyledFormForChatTextFieldAndButton>
      </StyledBoxForChat>
    </StyledDivForChat>
  )
}

export default Chat

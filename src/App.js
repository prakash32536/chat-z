
import Login from "./components/Login";
import Chat from "./components/Chat";
import { useState } from "react";
import Cookies from 'universal-cookie'
import Room from "./components/RoomPage";

const cookies = new Cookies();


export default function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState()

  const GetDataFromRoom = (data) => {
    setRoom(data)
  }

  if (!isAuth) {
    return (
      <div>
        <Login setIsAuth={setIsAuth} />
      </div>
    )
  }else{
  return (
    <div>
      {!room ? (
        <div>
          <Room onSubmit={GetDataFromRoom} />
        </div>
      ) : (
        <div>
          <Chat room = {room} />
        </div>
      )}
    </div>
  )}
}




import { Avatar, Box, Button, IconButton, Typography } from "@mui/material"
import { useAuth } from "../context/AuthContext"
import { red } from "@mui/material/colors";
import ChatItems from "../components/chat/ChatItems";
import { IoMdSend } from "react-icons/io";
const chatMessages = [
  { role: 'user', string: 'Hello', content: 'Hi there! How can I assist you today?' },
  { role: 'assistant', string: 'Help', content: 'Sure, I can help. What do you need assistance with?' },
  { role: 'user', string: 'Weather', content: 'What is the current weather like?' },
  { role: 'assistant', string: 'Weather', content: 'I can provide you with the current weather. May I know your location?' },
  { role: 'user', string: 'New York', content: 'I am in New York.' },
  { role: 'assistant', string: 'Weather', content: 'The current weather in New York is 72°F with clear skies.' },
  // Add more chat messages as needed
];

const Chat = () => {
  const auth = useAuth();
  return (
    <>
    <Box
    sx={{
      display:'flex',
      flex:1,
      width:"100%",
      height:"100%",
      mt:3,
      gap:3,
    }}
    >
      <Box sx={{display: {md:"flex",xs:'none',sm:'none'},flex:0.2,flexDirection:'column',}}>
        <Box
        sx={{
          display:'flex',
          width:'100%',
          height:'60vh',
          bgcolor:'rgb(17,29,39)',
          borderRadius:5,
          flexDirection:'column',
          mx:3,
        }}
        >
          <Avatar
          sx={{
            mx:'auto',
            my:2,
            bgcolor:'white',
            color:'black',
            fontWeight:700,
          }}
          >
            {auth?.user?.name[0]}
            {auth?.user?.name.split(' ')[1][0]}
          </Avatar>
          <Typography sx={{mx:'auto',fontFamily:'work sans'}}>
              You are talking to a ChatBOT
          </Typography>
          <Typography sx={{mx:'auto',fontFamily:'work sans',my:4,p:3}}>
            You can ask some questions related to Knowledge,Business,Advices,
            Education,etc.But avoid sharing personal information.
          </Typography>
          <Button
          sx={{
            width:'200px',
            my:'auto',
            color:'white',
            fontWeight:700,
            borderRadius:3,
            mx:'auto',
            bgcolor:red[300],
            ":hover":{
            bgcolor:red.A400
            }
          }}
          >
            Clear Chat
          </Button>
        </Box>
      </Box>
      <Box sx={{display:'flex',flex:{md:0.8,xs:1,sm:1},flexDirection:'column',px:3}}>
        <Typography
        sx={{fontSize:'40px',color:"white",mb:2,mx:'auto',fontWeight:"600",}}>
          Model - GPT 3.5 Turbo
          
        </Typography>
        <Box
        sx={{
          width:'100%',
          height:'60vh',
          borderRadius:3,
          mx:'auto',
          display:'flex',
          flexDirection:'column',
          overflow:'scroll',
          overflowX:'hidden',
          overflowY:'auto',
          scrollBehavior:'smooth',
        }}
        >
          {chatMessages.map((chat,index)=><ChatItems content={chat.content} role={chat.role} key={index}/>)}
        </Box>
        <div
        style={{
          width:'100%',
          padding:'20px',
          borderRadius:8,
          backgroundColor:'rgb(17,27,39)',
          display:'flex',
          margin:'auto',
        }}
        >
          {" "}
          <input
          type="text"
          style={{
            width:'100%',
            backgroundColor:'transparent',
            padding:'10px',
            border:'none',
            outline:'none',
            color:'white',
            fontSize:'20px',
          }}
          />
          <IconButton sx={{ml:'auto',color:'white'}}>
            <IoMdSend/>
          </IconButton>
        </div>
          
      </Box>
    </Box>
    </>
  )
}

export default Chat
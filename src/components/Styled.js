import styled from "@emotion/styled";
import { Card,Button, Typography,TextField, Box } from '@mui/material';

export const StyledDiv = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items:center;
height: 75vh;
justify-content: center;

`;
export const StyledCard = styled(Card)`
min-width: 270px;
width: 50%;
height: 50vh;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
max-width: 315px;

`;
export const StyledButton = styled(Button)`
height: 100%;
`;
export const StyledTypography = styled(Typography)`
margin-left: 15px;
`;
export const StyledTextField = styled(TextField)`
margin: 20px 0px;
`;

export const StyledForm = styled.form`
min-width: 270px;
width: 50%;
height: 50vh;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
max-width: 315px;
flex-direction: column;
`;
export const StyledButtonRoom = styled(Button)`

`;
export const StyledDivForChat = styled.div`
width: 100%;
height: 100vh;
`;
export const StyledBoxForChat = styled(Box)`
width: 100%;
height: calc(100% - 64px);
`;
export const StyledTextFieldForChat = styled(TextField)`
width: 80%;
`;
export const StyledFormForChatTextFieldAndButton = styled.form`
width: 90%;
display: flex;
margin-left: 5%;
margin-top: 20px;
`;
export const StyledButtonForSendChat = styled(Button)`
width: 20%;
`;
export const StyledBoxForChatsRender = styled(Box)`
width: 94%;
height: calc(100% - 111px);
overflow-y: auto;
padding-left: 20px;
`;
export const StyledChatP = styled.p`
font-size: 22px;
margin: 0px 20px;
border-radius: 0px 20px 20px 20px;
background: #dbdbff;
padding: 10px 20px;
margin-left: 10%;
`;
export const StyledMessageDiv = styled.div`
margin-top: 20px
`;
export const StyledDivForUserInfo = styled.div`
display: flex;
align-items: center;
`;
export const StyledImg = styled.img`
border-radius: 100%;
`;

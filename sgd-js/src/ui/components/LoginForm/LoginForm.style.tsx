import {styled} from '@mui/material'

export const LoginForm = styled('form') `
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    background-color: white;
	padding: 20px;
    width: 500px;
    border: 1px solid black;
    margin: 50px auto 0px auto;
`

export const Title = styled('legend') `
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 2px solid #c3c3c3;
`

export const InputLabel = styled('label') `
    font-weight: bold;
`

export const InputField = styled('input') `
	padding: 8px;
	margin-bottom: 10px;
`

export const ButtonClear = styled('button') `
    padding: 10px 5px;
    width: 60px;
    margin: 10px 5px 0px;
    background-color: #fd604b;
    color: white;
    border: 2px solid #252525;
`

export const ButtonSubmit = styled('button') `
    padding: 10px 5px;
    width: 60px;
    margin: 10px 5px 0px;
    background-color: #008cff;
    color: white;
    border: 2px solid #252525;
`

export const ButtonSignUp = styled('button') `
    padding: 10px 5px;
    width: 100px;
    margin-top: 10px;
    margin-left: 46%;
    background-color: #09ff00;
    color: white;
    border: 2px solid #252525;
`

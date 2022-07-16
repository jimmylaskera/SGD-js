import { Box } from "@mui/material"
import Link from "next/link"
import { LoginForm, Title, InputLabel, InputField, ButtonClear, ButtonSubmit, ButtonSignUp } from "./LoginForm.style"

export default function Login () {
    return (
        <LoginForm>
            <Title>Formulário de Autenticação</Title>
            <InputLabel htmlFor='username'>Nome de Usuário</InputLabel>
            <InputField type='text' name='username' placeholder='Usuário' required />
            <InputLabel htmlFor='password'>Senha</InputLabel>
            <InputField type='password' name='password' placeholder='Senha' required />
            <Box sx={{ width: '100%' }}>
                <ButtonClear type='reset'>Limpar</ButtonClear>
                <ButtonSubmit type='submit'>Entrar</ButtonSubmit>
                <Link href='/register' passHref>
                    <ButtonSignUp>Cadastrar-se</ButtonSignUp>
                </Link>
            </Box>
        </LoginForm>
    )
}
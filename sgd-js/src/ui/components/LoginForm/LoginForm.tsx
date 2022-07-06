import { LoginForm, Title, InputLabel, InputField, ButtonClear, ButtonSubmit } from "./LoginForm.style"

export default function Login () {
    return (
        <LoginForm>
            <Title>Formulário de Autenticação</Title>
            <InputLabel htmlFor='username'>Nome de Usuário</InputLabel>
            <InputField type='text' name='username' placeholder='Usuário' required />
            <InputLabel htmlFor='password'>Senha</InputLabel>
            <InputField type='password' name='password' placeholder='Senha' required />
            <div id="row">
                <ButtonClear type='reset'>Limpar</ButtonClear>
                <ButtonSubmit type='submit'>Entrar</ButtonSubmit>
            </div>
            
        </LoginForm>
    )
}
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { ButtonSignUp, InputField, Title } from "../LoginForm/LoginForm.style";
import { ButtonRegister, RegisterForm } from "./RegisterForm.style";

export default function Register () {
    return (
        <RegisterForm>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Title>Cadastro de Usuário</Title>
                </Grid>
                <Grid item xs={6}>
                    <InputLabel htmlFor='username'>Nome de Usuário</InputLabel>
                    <InputField sx={{width: "100%"}} type='text' name='username' placeholder='Usuário' required />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel htmlFor='password'>Senha</InputLabel>
                    <InputField sx={{width: "100%"}} type='password' name='password' placeholder='Senha' required />
                </Grid>

                <Grid item xs={3}>
                    <InputLabel htmlFor='fname'>Nome</InputLabel>
                    <InputField sx={{width: "100%"}} type='text' name='fname' placeholder='ex: José' required />
                </Grid>
                <Grid item xs={3}>
                    <InputLabel htmlFor='lname'>Sobrenome</InputLabel>
                    <InputField sx={{width: "100%"}} type='text' name='lname' placeholder='ex: Silva' required />
                </Grid>
                <Grid item xs={6}>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <InputField sx={{width: "100%"}} type='email' name='email' placeholder='ex: josesilva@email.com'
                    required />
                </Grid>

                <Grid item xs={2}/>
                <Grid item xs={4}>
                    <InputLabel id="cargo-label">Cargo</InputLabel>
                    <Select labelId="cargo-label" id="cargo" label="Cargo" sx={{width: "100%"}}>
                        <MenuItem value={1}>Professor</MenuItem>
                        <MenuItem value={2}>Chefia</MenuItem>
                        <MenuItem value={3}>Departamento</MenuItem>
                        <MenuItem value={4}>Secretário</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={2}>
                    <ButtonRegister type="submit">Cadastrar</ButtonRegister>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </RegisterForm>
    )
}
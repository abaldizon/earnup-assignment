import { Box, Button, Grid, Paper, TextField } from "@mui/material"
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    Name: string
    Email: string
}


export default function Pokedex() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <Paper 
            elevation={3} 
            className="pokedexContainer"
        >
            <Box
                className="formBox"
                component="form"
                sx={{

                }}
                noValidate
                autoComplete="off"
            >
                
            </Box>
        </Paper>

    )
}
import { Box, Button, Grid, Paper, TextField } from "@mui/material"
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    Pokemon: string
}


export default function PokemonForm(props:{handleNext:() => void}) {
    const { 
        register, 
        formState: { errors },
        handleSubmit 
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        props.handleNext();
    };

    return (
        <Paper 
            elevation={3} 
            className="pokemonFormContainer"
        >
            <Box
                className="formBox"
                component="form"
                sx={{

                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField 
                    {...register("Pokemon", { required: true,  min: 3, maxLength: 50})} 
                    id="outlined-basic" 
                    label="Pokemon" 
                    error={!!errors.Pokemon}  
                        helperText={!!errors.Pokemon&&"Incorrect entry."}
                />
                <Button
                    type="submit"
                    className="nextButton"
                    variant="contained"
                >
                    Next
                </Button>


            </Box>
        </Paper>

    )
}
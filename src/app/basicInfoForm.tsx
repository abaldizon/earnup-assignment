import { Box, Button, Paper, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    Name: string
    Email: string
}

export default function BasicInfoForm(props:{handleNext:() => void}) {
    const { 
        register, 
        formState: { errors },
        handleSubmit 
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        props.handleNext();
    };

    return (
        <Paper 
            elevation={3} 
            className="formContainer"
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
                        {...register("Name", { required: true,  min: 3, maxLength: 50})} 
                        id="outlined-basic" 
                        label="Name" 
                        error={!!errors.Name}  
                        helperText={!!errors.Name&&"Incorrect entry."}
                    />
                    <TextField 
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} 
                        type="text" 
                        label="Email"  
                        error={!!errors.Email}  
                        helperText={!!errors.Email&&"Invalid email."}
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
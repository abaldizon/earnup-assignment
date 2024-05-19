"use client";
import { Box, Paper, Typography } from "@mui/material"
import { usePokemonContext } from "./pokemonContext"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Pokedex() {

    const pokeContext = usePokemonContext();

    return (
        <Paper
            elevation={3}
            className="pokedexContainer"
        >
            <Box
                className="pokedex"
            >
                {pokeContext?.pokemonData?.sprites ?
                    <>
                        <Typography variant="h5" gutterBottom>
                            Here are some images from your favorite pokemon!
                        </Typography>
                        <ImageList sx={{ width: 500, height: 250 }} cols={3} rowHeight={164}>
                            {pokeContext?.pokemonData.sprites.front_default &&
                                <ImageListItem key={'front_default'}>
                                    <img
                                        src={pokeContext?.pokemonData.sprites.front_default}
                                    />
                                </ImageListItem>
                            }
                            {pokeContext?.pokemonData.sprites.front_female &&
                                <ImageListItem key={'front_female'}>
                                    <img
                                        src={pokeContext?.pokemonData.sprites.front_female}
                                    />
                                </ImageListItem>
                            }
                            {pokeContext?.pokemonData.sprites.front_shiny &&
                                <ImageListItem key={'front_shiny'}>
                                    <img
                                        src={pokeContext?.pokemonData.sprites.front_shiny}
                                    />
                                </ImageListItem>
                            }
                        </ImageList>
                    </>
                    :
                    <>
                        <Typography variant="h5" gutterBottom>
                            No Pokemons found!
                        </Typography>
                    </>
                }

            </Box>
        </Paper>

    )
}
"use client"; 
import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface pokemonDataType {
  pokemonData: any;
}

interface DataContextType {
  pokemonData: pokemonDataType | null;
  updatePokemon: (newEndpoint: string) => void;
}

const PokemonContext = createContext<pokemonDataType | null>(null);

interface DataProviderProps {
  children: ReactNode;
};

export default function PokemonProvider({ children }: DataProviderProps) {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState<pokemonDataType | null>(null);

  const updatePokemon = (newPokemon: string) => {
    setSelectedPokemon(newPokemon);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        const jsonData = await response.json();
        setPokemonData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (selectedPokemon!=='') {
      fetchData();
    }
  }, [selectedPokemon]);

  const contextValue: DataContextType = {
    pokemonData,
    updatePokemon
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
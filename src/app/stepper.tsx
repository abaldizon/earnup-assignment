"use client"; 
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import BasicInfoForm from './basicInfoForm';
import PokemonForm from './pokemonForm';
import Pokedex from './pokedex';

const steps = ['User Info', 'Favorite Pokemon', 'Pokemon Info'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  return (
    <Box 
        className="stepperContainer"
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 &&
        <BasicInfoForm
            handleNext={handleNext}
        />
      }
      {activeStep === 1 &&
        <PokemonForm
            handleNext={handleNext}
        />
      }
      {activeStep === 2 &&
        <Pokedex></Pokedex>
      }
    </Box>
        
  );
}

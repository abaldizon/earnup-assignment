import { Paper } from "@mui/material";
import HorizontalLinearStepper from "./stepper";
import Image from "next/image";

export default function Home() {
  return (
    <Paper
      className="mainPage"
      sx={{ width: '100%' }}
    >
      <HorizontalLinearStepper></HorizontalLinearStepper>

    </Paper>

  );
}

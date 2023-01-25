import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import { lightTheme } from 'mui-themes';

const defaultTheme = createTheme(); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={lightTheme}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

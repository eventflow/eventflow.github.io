import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
  palette: {
    background: {
      // default: '#f5f3ef',
      default: '#F6F5F5',
    },
    text: {
      primary: '#2b0f3a',
      secondary: '#fb6400',
    },
    primary: {
      main: '#293B5F',
    },
    secondary: {
      // main: '#8d51ef',
      main: '#84A9AC', //'#59405C' // '#84A9AC'
    },
  },
})

export default theme

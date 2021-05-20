import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
  palette: {
    background: {
      default: '#f5f3ef',
    },
    text: {
      primary: '#2b0f3a',
      secondary: '#fb6400',
    },
    primary: {
      main: '#4ba58b',
    },
    secondary: {
      main: '#8d51ef',
    },
  },
})

export default theme

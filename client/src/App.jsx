import React from 'react'
import { Container, AppBar, Grow, Grid } from '@mui/material'
import MyComponent from './Comps'
// import Posts from './Compoents/Posts/posts.js'
import Posts from './Compoents/Posts/posts.jsx'
import Form  from './Compoents/Forms/forms.jsx'
import {makeStyles} from './style.jsx'

function App() {
  return (
    <>

    const classes = usestyles();
      <Container maxWidth="md" >
        <AppBar className={classes.appBar} position='static' color='inherit'>

          <Topography className={classes.heading} variant="h2" align="center">
            Memories
          </Topography>


<img src='/vite.svg' height="5"/>
        </AppBar>

        <Grow in>

          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing= {3}>

              <Grid items xs= {20} sm = {7}><Form/></Grid>
              <Grid items xs= {20} sm = {4}> <Posts/></Grid>
              <Posts></Posts>
            </Grid>
          </Container>
        </Grow>

      </Container>


    </>
  )
}

export default App
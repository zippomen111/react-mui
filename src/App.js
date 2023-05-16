import { AppBar, Box, Container, IconButton, Toolbar, Dialog, Typography, Button, Paper, Grid, Card, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MessageIcon from '@mui/icons-material/Message';
import FolderIcon from '@mui/icons-material/Folder';
import RectoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationIcon from '@mui/icons-material/FmdGood';

import PlayCircleIcon from '@mui/icons-material/PlayCircleRounded';
import './App.css';

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [value, setValue] = useState('recents')
  const [open, setOpen] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              sx={{ flexGrow: 1 }}
            >
              Web Dev Blog</Typography>
            <Box>
              <Button
                color='inherit'
                variant='outlined'
                onClick={handleClickOpen}
              >
                Log In</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log In to see Videos</DialogContentText>
                  <TextField autoFocus margin='dense' id='password' label='Password' type='password' fullWidth></TextField>
                  <TextField autoFocus margin='dense' id='name' label='Email' type='email' fullWidth></TextField>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>Cancel</Button>
                  <Button onClick={handleClose} color='primary'>Log In</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color='secondary' variant='contained' sx={{ marginLeft: 1 }}>Sign</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <div sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundOverlay: 'rgba(0,0,0,.3)'
        }}></div>
        <Paper sx={{
          position: 'relative',
          color: 'white',
          backgroundImage: '  url(https://picsum.photos/1400/1200)', //no type error
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          margin: '60px 0',
          padding: '20px 0',

        }}>
          <Container fixed >
            <Grid container>
              <Grid item md={6}>
                <div>
                  <Typography
                    color='inherit'
                    component='h1'
                    variant='h3'
                    gutterBottom
                  >
                    Web developer block
                  </Typography>
                  <Typography
                    color='inherit'
                    component='h5'
                    paragraph
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus numquam, sequi perspiciatis minus sit sint quisquam doloremque nam incidunt, assumenda veniam eius deserunt id dignissimos.
                  </Typography>
                  <Button
                    variant='contained'
                    color='secondary'
                  >Leart more</Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div>
          <Container maxWidth="md">
            <Typography variant='h2' color='textPrimary' gutterBottom align='center'>
              Web Developer Blog
            </Typography>
            <Typography variant='h5' color='textSecondary' align='center' paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus reiciendis ducimus est debitis aperiam, enim asperiores minus illo corporis vitae!
            </Typography>
          </Container>
        </div>
        <div>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item>
              <Button variant='contained' color='primary'>Start Now</Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>Learn More</Button>
            </Grid>

          </Grid>
        </div>
        <Container>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card>
                  <CardMedia
                    image='https://picsum.photos/200'
                    title='image title' sx={{ height: "200px", margin: "60px 0" }} />
                  <CardContent>
                    <Typography variant='h5' gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>Blog post text.More text.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>View</Button>
                    <Button size='small'>Edit</Button>
                    <MessageIcon />
                    <PlayCircleIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main >
      <footer>
        <Typography variant='h6' align='center' gutterBottom>
          footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label='Recents' value='recents' icon={<RectoreIcon />} />
          <BottomNavigationAction label='Favorites' value='favorites' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Nearby' value='nearby' icon={<LocationIcon />} />
          <BottomNavigationAction label='Folder' value='folder' icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' component='p' variant='subtitle' gutterBottom>
          Web develor Block JS React Material UI
        </Typography>
      </footer>
    </>
  );
}

export default App;

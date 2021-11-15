import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';


const Header = () => {

  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none'
    },
    NavIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right'
      }
    },
    mobileNabItem: {
      textDecorotion: 'none',
      color: '#000'
    }

  })

  const { navItem, NavIcon, navItemContainer, navLogo, mobileNabItem } = useStyle()
  const [state, setState] = React.useState(false);


  const { user, logout } = useAuth();


  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"

    >

      <Divider />
      <List>

        <ListItem  >
          <Link className={mobileNabItem} to="/home"> home</Link>
        </ListItem>
        <ListItem >
          <Link className={mobileNabItem} to="/allproducts">AllProducts </Link>
        </ListItem>
        <ListItem>
          <Link className={mobileNabItem} to="/dashbord"> Dashboard</Link>
        </ListItem>
  
        <ListItem button >
          {user?.email ?
            <Box>

              <Button onClick={logout} color="inherit">Logout</Button>
            </Box>

            :
            <Link className={navItem} to="login">
              <Button color="inherit">Login</Button>
            </Link>
          }
        </ListItem>

      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={NavIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Manir handicraft jewellery pvt(LTD).
            </Typography>


            {/* --------------navlink----------- */}
            
            <Box className={navItemContainer}>
              <Link className={navItem} to="/home"><Button color="inherit">Home</Button></Link>
              <Link className={navItem} to="/allproducts"><Button color="inherit">Allproducts</Button></Link>
              {user?.email ?
                <Box>
                  <Link className={navItem} to="/dashbord">
                    <Button color="inherit">Dashbord</Button>
                  </Link>
                  <Button onClick={logout} color="inherit">Logout</Button>
                </Box>

                :
                <Link className={navItem} to="login">
                  <Button color="inherit">Login</Button>
                </Link>
              }

            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>

        <React.Fragment >

          <Drawer

            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>

      </div>
    </>
  );
};

export default Header;






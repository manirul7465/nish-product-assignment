import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Payment from './Payment/Payment';

import Logout from './Logout/Logout';
import { Button } from '@mui/material';

import DashbordHome from './DashbordHome/DashbordHome';


import {

  Switch,
  Route,
  Link,

  useRouteMatch
} from "react-router-dom";
import Review from './Review/Review';

import useAuth from '../../Hooks/useAuth';
import Makeadmin from './Makeadmin/Makeadmin';
import Adminroute from '../Login/Adminroute/Adminroute';
import Addproduct from './Addproduct/Addproduct';
import Manageproducts from './Manageproducts/Manageproducts';
import Deleteorder from './Deleteorder/Deleteorder';


const drawerWidth = 180;

function Dashbord(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logout, admin } = useAuth();

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

     {
       !admin && <Box>
       <Link to={`${url}`}><Button color="inherit">my orders</Button></Link><br />
       <Link to={`${url}/payment`}><Button color="inherit">payment</Button></Link><br />
       <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link><br />
     </Box>

     }
      {admin && <Box>
        <Link to={`${url}/makeadmin`}><Button color="inherit">Make admin</Button></Link><br />
        <Link to={`${url}/addproduct`}><Button color="inherit">Add product</Button></Link><br />
        <Link to={`${url}/manageallorders`}><Button color="inherit">manage all order</Button></Link><br />
        <Link to={`${url}/deleteproducts`}><Button color="inherit">Manage product</Button></Link><br />
      </Box>
      }

      <Button variant="contained" onClick={logout} color="warning">Logout</Button>




    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashbordHome></DashbordHome>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/logout`}>
            <Logout></Logout>
          </Route>
          <Adminroute path={`${path}/makeadmin`}>
            <Makeadmin></Makeadmin>
          </Adminroute>
          <Adminroute path={`${path}/addproduct`}>
            <Addproduct></Addproduct>
          </Adminroute>
          <Adminroute path={`${path}/manageallorders`}>
            <Deleteorder></Deleteorder>
          </Adminroute>
          <Adminroute path={`${path}/deleteproducts`}>
            <Manageproducts></Manageproducts>
          </Adminroute>
        </Switch>

      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;

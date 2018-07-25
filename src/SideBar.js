import React from 'react'
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = (props) => (
    <div>
    <Drawer
        open={false}
    >

        <Link
            to={'/dashboard'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Dashboard
           </MenuItem>
        </Link>
        <Link
            to={'/basic-componets'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                BasicComponents
     </MenuItem>
        </Link>
        <Link
            to={'/passing-parameters/cos'}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                Parameter - coś
            </MenuItem>
        </Link>
    </Drawer>
    </div>
)

export default SideBar
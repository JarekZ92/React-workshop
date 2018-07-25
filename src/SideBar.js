import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideBar extends React.Component {
    render() {
        return (
            <Drawer
                open={this.props.isSideBarOpen}
            >
                <MenuItem
                    onClick={this.props.toggleSideBar}
                >
                    CLOSE
             </MenuItem>
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
        )
    }
}


export default SideBar
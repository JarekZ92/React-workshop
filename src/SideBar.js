import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideBar extends React.Component {
    state = {
        isOpen: true
    }

    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Drawer
                open={this.state.isOpen}
            >
                <MenuItem
                    onClick={this.toggleHandler}
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
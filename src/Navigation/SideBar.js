import React from 'react'
import Drawer from 'material-ui/Drawer'

import SideBarItem from './SideBarItem'

class SideBar extends React.Component {
    render() {
        return (
            <Drawer
                open={this.props.isSideBarOpen}
                docked={false}
                onRequestChange={this.props.toggleSideBar}
            >
                <SideBarItem
                    to={'/dashboard'}
                    label={'Dashboard'}
                />
                <SideBarItem
                    to={'/basic-components'}
                    label={'Basic-Components'}
                />
            </Drawer>
        )
    }
}


export default SideBar
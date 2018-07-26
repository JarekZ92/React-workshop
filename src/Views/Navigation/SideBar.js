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
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/basic-componets'}
                    label={'Basic-Components'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/passing-parameters/cos'}
                    label={'Parameter - coś'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/counter'}
                    label={'Counter'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/toDo'}
                    label={'ToDo'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                 <SideBarItem
                    to={'/fetching-random-users'}
                    label={'FetchingRandomUsers'}
                    toggleSideBar={this.props.toggleSideBar}
                />
            </Drawer>
        )
    }
}


export default SideBar
import React, { Component } from "react"
import NavSidebar from "../../components/NavSidebar/NavSidebar"

class NavSidebarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedMenuItems: this.props.icons
    }
  }

  render() {
    const { displayedMenuItems } = this.state
    return <NavSidebar menuItems={displayedMenuItems} />
  }
}

export default NavSidebarContainer

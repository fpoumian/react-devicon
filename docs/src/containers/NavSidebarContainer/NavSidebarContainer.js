import React, { Component } from "react"
import NavSidebar from "../../components/NavSidebar/NavSidebar"

class NavSidebarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedMenuItems: this.props.icons,
      currentSearchTerm: ""
    }
  }

  handleSearchBoxChange = e => {
    const { value } = e.target
    this.setState({
      currentSearchTerm: value,
      displayedMenuItems: this.props.icons.filter(icon => {
        return icon.includes(value)
      })
    })
  }

  render() {
    const { displayedMenuItems, currentSearchTerm } = this.state
    return (
      <NavSidebar
        menuItems={displayedMenuItems}
        onSearchBoxChange={this.handleSearchBoxChange}
        currentSearchTerm={currentSearchTerm}
      />
    )
  }
}

export default NavSidebarContainer

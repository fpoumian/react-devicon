import React, { Component } from "react"
import PropTypes from "prop-types"
import Sidebar from "grommet/components/Sidebar"
import Header from "grommet/components/Header"
import Box from "grommet/components/Box"
import Menu from "grommet/components/Menu"
import Title from "grommet/components/Title"
import Search from "grommet/components/Search"

import SidebarLink from "../SidebarLink/SidebarLink"
import Link from "gatsby-link"

function NavSidebar({ menuItems, onSearchBoxChange, currentSearchTerm }) {
  return (
    <Sidebar colorIndex="neutral-1" size={"medium"}>
      <Header pad="medium" justify="between">
        <Title>
          <Link to={"/"}>React Devicon</Link>
        </Title>
      </Header>
      <Box
        justify="start"
        colorIndex={"neutral-1-t"}
        margin={{ vertical: "medium" }}
      >
        <Search
          inline={true}
          placeHolder={"Search icons..."}
          onDOMChange={onSearchBoxChange}
          value={currentSearchTerm}
        />
      </Box>
      <Box flex="grow" justify="start">
        <Menu primary={true}>
          {menuItems.map(item =>
            <SidebarLink route={item} key={item} active={false} />
          )}
        </Menu>
      </Box>
    </Sidebar>
  )
}

NavSidebar.propTypes = {
  menuItems: PropTypes.array,
  onSearchBoxChange: PropTypes.func,
  currentSearchTerm: PropTypes.string
}

export default NavSidebar

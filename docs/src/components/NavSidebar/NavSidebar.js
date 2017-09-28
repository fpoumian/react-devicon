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

export default ({ menuItems, onSearchBoxChange, currentSearchTerm }) => {
  return (
    <Sidebar colorIndex="neutral-1" size={"medium"}>
      <Header pad="medium" justify="between">
        <Title>
          <Link to={"/"}>React Devicon</Link>
        </Title>
      </Header>
      <Box justify="start" colorIndex={"neutral-1-t"}>
        <Search
          inline={true}
          placeHolder={"Search icons..."}
          onDOMChange={onSearchBoxChange}
          value={currentSearchTerm}
        />
      </Box>
      <Box flex="grow" justify="start">
        <Menu primary={true}>
          {menuItems.map(link => <SidebarLink route={link} active={false} />)}
        </Menu>
      </Box>
    </Sidebar>
  )
}

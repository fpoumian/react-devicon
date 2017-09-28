import React, { Component } from "react"
import PropTypes from "prop-types"
import Sidebar from "grommet/components/Sidebar"
import Header from "grommet/components/Header"
import Box from "grommet/components/Box"
import Menu from "grommet/components/Menu"
import Title from "grommet/components/Title"
import SidebarLink from "../SidebarLink/SidebarLink"
import Link from "gatsby-link"

export default ({ menuItems }) => {
  return (
    <Sidebar colorIndex="neutral-1" size={"medium"}>
      <Header pad="medium" justify="between">
        <Title>
          <Link to={"/"}>React Devicon</Link>
        </Title>
      </Header>
      <Box flex="grow" justify="start">
        <Menu primary={true}>
          {menuItems.map(link => <SidebarLink route={link} active={false} />)}
        </Menu>
      </Box>
    </Sidebar>
  )
}

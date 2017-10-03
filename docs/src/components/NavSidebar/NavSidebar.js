import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Search from 'grommet/components/Search'
import Anchor from 'grommet/components/Anchor'
import DownloadIcon from 'grommet/components/icons/base/Download'
import CodeIcon from 'grommet/components/icons/base/Code'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import MenuIcon from 'grommet/components/icons/base/Menu'

import SidebarLink from '../SidebarLink/SidebarLink'

function NavSidebar({ menuItems, onSearchBoxChange, currentSearchTerm }) {
  return (
    <Sidebar colorIndex="neutral-1" size={'medium'}>
      <Header pad="medium" justify="between" flex={false}>
        <Title truncate={false} className="devicon-logo">
          <Link to={'/'}>
            {`
            React
            Devicon
            `}
          </Link>
        </Title>
      </Header>
      <Box
        flex={false}
        pad={{
          horizontal: 'medium',
        }}
      >
        <Menu inline={false} icon={<MenuIcon />} label={'MENU'}>
          <Anchor href={'/#install'} icon={<DownloadIcon />}>
            Installation
          </Anchor>
          <Anchor href={'/#usage'} icon={<CodeIcon />}>
            Usage
          </Anchor>
          <Anchor href={'#'} target="_blank" icon={<GithubIcon />}>
            Github Repository
          </Anchor>
        </Menu>
      </Box>
      <Box
        justify="start"
        flex={false}
        colorIndex={'neutral-1-t'}
        margin={{ vertical: 'medium' }}
      >
        <Search
          inline={true}
          placeHolder={'Search icons...'}
          onDOMChange={onSearchBoxChange}
          value={currentSearchTerm}
        />
      </Box>
      <Box flex="grow" justify="start">
        <Menu primary={true}>
          {menuItems.map(item => (
            <SidebarLink route={item} key={item} active={false} />
          ))}
        </Menu>
      </Box>
    </Sidebar>
  )
}

NavSidebar.propTypes = {
  menuItems: PropTypes.array,
  onSearchBoxChange: PropTypes.func,
  currentSearchTerm: PropTypes.string,
}

export default NavSidebar

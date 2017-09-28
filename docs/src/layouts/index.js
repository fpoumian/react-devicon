import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Split from "grommet/components/Split"
import Box from "grommet/components/Box"
import App from "grommet/components/App"
import Section from "grommet/components/Section"
import NavSidebarContainer from "../containers/NavSidebarContainer/NavSidebarContainer"
import "../scss/main.scss"

const TemplateWrapper = ({ children, data }) => {
  const icons = data.allFile.edges[0].node.childrenDeviconJson.map(
    nameObj => nameObj.name
  )
  return (
    <App centered={false}>
      <Split fixed={true} flex={"right"}>
        <Box colorIndex="neutral-1" pad="none" size={"medium"}>
          <NavSidebarContainer icons={icons} />
        </Box>
        <Box colorIndex="light-2" pad="large" full={"vertical"}>
          <Section>
            {children()}
          </Section>
        </Box>
      </Split>
    </App>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const DeviconNamesQuery = graphql`
  query DeviconNamesQuery {
    allFile {
      edges {
        node {
          childrenDeviconJson {
            name
          }
        }
      }
    }
  }
`

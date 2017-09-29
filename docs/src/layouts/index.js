import React from "react"
import PropTypes from "prop-types"
import Split from "grommet/components/Split"
import Helmet from "react-helmet"
import Box from "grommet/components/Box"
import App from "grommet/components/App"
import Section from "grommet/components/Section"
import Footer from "grommet/components/Footer"
import Paragraph from "grommet/components/Paragraph"
import NavSidebarContainer from "../containers/NavSidebarContainer/NavSidebarContainer"
import "../scss/main.scss"

const TemplateWrapper = ({ children, data }) => {
  const icons = data.allFile.edges[0].node.childrenDeviconJson.map(
    nameObj => nameObj.name
  )
  return (
    <App centered={false}>
      <Helmet>
        <title>{`React Devicon | home`}</title>
      </Helmet>
      <Split fixed={true} flex={"right"}>
        <NavSidebarContainer icons={icons} />
        <Box colorIndex="light-2" pad="large" full={"vertical"}>
          <Section>
            {children()}
          </Section>
          <Footer
            justify={"center"}
            size={"large"}
            margin={{
              vertical: "large"
            }}
          >
            <Box direction="column" align={"center"}>
              <Paragraph margin="none">{`© 2017 Fernando Poumián`}</Paragraph>
              <Paragraph margin="medium" align={"center"}>
                {`All product names, logos, and brandsare property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.`}
              </Paragraph>
            </Box>
          </Footer>
        </Box>
      </Split>
    </App>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
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

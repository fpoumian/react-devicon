import React from "react"
import Amazonwebservices from "react-devicon/amazonwebservices/original"

class IconPage extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.pathContext.name}
        </h1>
        <Amazonwebservices />
      </div>
    )
  }
}

export default IconPage

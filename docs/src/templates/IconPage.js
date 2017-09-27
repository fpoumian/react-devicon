import React from "react"

class IconPage extends React.Component {

  render() {
    return (
      <div>
        <h1>
          {this.props.pathContext.name}
        </h1>
      </div>
    )
  }
}

export default IconPage

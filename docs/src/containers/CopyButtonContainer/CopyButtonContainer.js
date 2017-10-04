import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CopyButton from '../../components/CopyButton/CopyButton'

import copy from 'copy-to-clipboard'

class CopyButtonContainer extends Component {
  state = {
    copedLabelVisible: false,
  }

  handleCopyButtonClick = () => {
    copy(this.props.toCopy)
    this.setState(
      {
        copedLabelVisible: true,
      },
      () =>
        setTimeout(() =>
          this.setState(
            {
              copedLabelVisible: false,
            },
            1000
          )
        )
    )
  }

  render() {
    return (
      <CopyButton
        copiedLabelVisible={this.state.copedLabelVisible}
        dataTip={'Copy to Clipboard'}
        onCopyBtnClick={this.handleCopyButtonClick}
      />
    )
  }
}

CopyButtonContainer.propTypes = {
  toCopy: PropTypes.string,
}

export default CopyButtonContainer

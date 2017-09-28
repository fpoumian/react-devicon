import React from 'react'
import PropTypes from 'prop-types'
import Highlight from "react-highlight"
import "highlight.js/styles/dracula.css"

const CodeSnippet = ({children, className}) => {
  return (
    <Highlight className={className}>
      { children }
    </Highlight>
  )
}

CodeSnippet.propTypes = {}
CodeSnippet.defaultProps = {}

export default CodeSnippet
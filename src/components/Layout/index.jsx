import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import styled from "styled-components"

const LayoutStyle = styled.div`
  max-width: 66.875rem;
  margin-left: auto;
  margin-right: auto;
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <LayoutStyle>
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </LayoutStyle>
    )
  }
}

export default Layout

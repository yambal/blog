import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import styled from "styled-components"

const Layout = styled.div`
  max-width: 66.875rem;
  margin-left: auto;
  margin-right: auto;
`


class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Layout>
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </Layout>
    )
  }
}

export default Layout

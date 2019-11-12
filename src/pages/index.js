import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector"
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui"
import { Layout as SearchLayout } from "@elastic/react-search-ui-views"

import "@elastic/react-search-ui-views/lib/styles/styles.css"

const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  hostIdentifier: "host-2376rb",
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <SearchProvider
      config={{
        apiConnector: connector,
      }}
    >
      <div className="App">
        <SearchLayout
          header={<SearchBox />}
          bodyContent={<Results titleField="title" urlField="nps_link" />}
        />
      </div>
    </SearchProvider>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

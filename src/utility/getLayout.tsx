import React, { ReactElement } from "react"
import Layout from "../components/Layout/Layout"

const getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default getLayout

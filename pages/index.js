import Routine from "../cmp/routine";
import Layout from "../cmp/layout";
import Head from "next/head";
const Index=()=>( 
<>
    <Head>
        <title>Daily Routine</title>
        <link rel="icon" href="/lunch.png" />
    </Head>
    <Layout> <Routine /> </Layout> 
</>
);
export default Index;
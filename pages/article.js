import React, { Fragment } from "react";
import { withRouter } from "next/router";
import { Layout } from "../src/components/common/index";
import { ArticleView } from "../src/components/article/index";
import { Footer, Navbar } from "../src/components/navigation/index";
import Head from "next/head";
import { ContextConsumer } from "../src/context/index";

export default withRouter(props => {
  console.log(props.router.query.id);
  return (
    <Fragment>
      <Head>
        <title>Blog Post</title>
      </Head>
      <Layout>
        <Navbar />
        {/* <Tags /> */}

        <ContextConsumer>
          {({ articles }) => {
            const article = articles.filter(article => {
              return article.title === props.router.query.id;
            });
            return <ArticleView {...article} />;
          }}
        </ContextConsumer>
        <Footer />
      </Layout>
    </Fragment>
  );
});

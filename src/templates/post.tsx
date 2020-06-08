import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { PostsBySlugQuery, SitePageContext } from '../../gatsby-graphql';
import { Layout } from '../components/Layout';
import Dump from '../components/Dump';

interface Props {
  data: PostsBySlugQuery;
  pageContext: SitePageContext;
}
const Post: React.FC<Props> = ({ data, pageContext }) => {
  console.log(pageContext);
  const body = data?.mdx?.body;
  const frontmatter = data?.mdx?.frontmatter;
  const previous = pageContext.previous;
  const next = pageContext.next;
  return (
    <Layout>
      <Dump previous={previous} />
      <Dump next={next} />
      <h1>{frontmatter?.title ?? 'No Title'}</h1>
      <p>{frontmatter?.date ?? 'Not Sure'}</p>
      <MDXRenderer>{body as string}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields?.slug as string}>
              <p>{previous.frontmatter?.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields?.slug as string}>
              <p>{next.frontmatter?.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

export default Post;

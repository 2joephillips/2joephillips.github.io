import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Layout } from '../components/Layout';
import Dump from '../components/Dump';

import { Site_Index_QueryQuery } from '../../gatsby-graphql';

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;

interface Props {
  data: Site_Index_QueryQuery;
}
const Index: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Dump data={data} />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={`${fields?.slug}`}>
              <h1>{frontmatter?.title}</h1>
              <p>{frontmatter?.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Index;

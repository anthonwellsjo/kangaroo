import { gql } from "@apollo/client";

export const GENERAL_PREVIEW_ARTICLES = gql`
query GetGeneralPreviewArticles {
  allArticle {
    _id
    title
    slug {
      current
    }
    articleImage {
      asset {
        url
      }
    }
    category {
      name
    }
  }
}
`;

export const GET_FULL_ARTICLE = gql`
query GetFullArticle($id: ID!) {
  Article(id: $id) {
    overviewRaw
  }
}
`;
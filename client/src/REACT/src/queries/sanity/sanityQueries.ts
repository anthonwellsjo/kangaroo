import { gql } from "@apollo/client";

export const GENERAL_PREVIEW_ARTICLES = gql`
query GetGeneralPreviewArticles {
  allArticle {
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
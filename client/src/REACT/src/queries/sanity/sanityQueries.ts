import { gql } from "@apollo/client";

export const GENERAL_PREVIEW_ARTICLES = gql`
query GetGeneralPreviewArticles {
  allArticle{
    title
    }
}
`;
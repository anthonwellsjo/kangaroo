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

export const ARTICLES_FOR_CHILD_OF_AGE = gql`
query getArticlesForChildrenOfAge ($ageInMonths: Float) {
  allArticle (where:{minAgeMonths:{lte: $ageInMonths}, maxAgeMonths: {gte: $ageInMonths}}) {
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


export const GET_USER_NOTIFICATIONS = gql`
query GetUserNotifications($ageInMonths: Float) {
  allNotification(where:{minAgeMonths:{lte: $ageInMonths}, maxAgeMonths: {gte: $ageInMonths}}) {
    title
    slug {
      current
    }
    description
    createdOn
    externalId
    isRegional
    region
    category{name}
  }
}
`;
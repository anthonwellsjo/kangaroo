interface GeneralArticlesData {
  allArticle: [Article]
}

interface Article {
  _id: string,
  title: string,
  slug: {
    current: string
  },
  articleImage: {
    asset: {
      url: string
    }
  },
  category: [{
    name: string
  }]
}

interface FullArticleData {
  Article: {
    overviewRaw: [Block]
  }
}

interface Block {
  _key: string,
  _type: string,
  children: [
    {
      _key: string,
      _type: string,
      marks: [],
      text: string
    }
  ],
  markDefs: [],
  style: string
}




export interface Slug {
  __typename: string;
  current: string;
}

export interface Category {
  __typename: string;
  name: string;
}

export interface SanityNotification {
  __typename: string;
  title: string;
  slug: Slug;
  description: string;
  createdOn: Date;
  externalId: number;
  isRegional: boolean;
  region: string[];
  category: Category[];
}

export interface SanityNotificationsQuery {
  allNotification: AllNotification[];
}



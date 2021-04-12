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
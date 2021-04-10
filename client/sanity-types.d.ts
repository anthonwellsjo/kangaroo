interface GeneralArticlesData {
  allArticle: [Article]
}

interface Article {
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
import React from 'react';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import CSS from 'csstype';

const titleStyle: CSS.Properties = {
  fontSize: ".9em",
  fontWeight: 800,
  margin: "10px 15px 5px 15px",
  lineHeight: "1.3em"
}
const catStyle: CSS.Properties = {
  fontSize: ".7em",
  fontWeight: 600,
  textAlign: "left",
  
}
const cardStyle: CSS.Properties = {
  position:"relative",
  height: "250px",
  width: "90%",
  boxShadow:"1px 1px 400px 1px #C4C4C4",
  margin: "20px auto 20px auto",
  
}

interface props {
  article: Article
}


const ArticlePreview = ({ article }: props) => {
  return (
    <div style={cardStyle}>
      <Columnizer>
        <p style={titleStyle}>{article.title}</p>
        <img style={{ width: "95%" }} src={article.articleImage.asset.url}></img>
        <p style={catStyle}>{article.category.map((c, i, a) => `${c.name}${a.length > i + 1 ? ", " : ""}`).join("")}</p>
      </Columnizer>
    </div>
  )
}

export default ArticlePreview;
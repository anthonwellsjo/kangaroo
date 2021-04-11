import React from 'react';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import CSS from 'csstype';
import Centralizer from '../../../../components/Stucture/Centralizer/Centralizer';

const titleStyle: CSS.Properties = {
  fontSize: ".9em",
  fontWeight: 800,
  margin: "10px 15px 5px 15px",
  lineHeight: "1.3em"
}
const catStyle: CSS.Properties = {
  fontSize: ".6em",
  fontWeight: 900,
  textAlign: "left",

}
const cardStyle: CSS.Properties = {
  position: "relative",
  height: "240px",
  width: "90%",
  boxShadow: "1px 1px 400px 1px #C4C4C4",
  margin: "20px auto 20px auto",

}

interface props {
  article: Article
}


const ArticlePreview = ({ article }: props) => {
  return (
    <div style={cardStyle}>
      <Columnizer>
        <div style={{ position: "absolute", top: 0, height: "50px", width: "100%"}}>
          <Centralizer>
            <p style={titleStyle}>{article.title}</p>
          </Centralizer>
        </div>
        <div style={{ height: "200px", width: "100%", overflow: "hidden", display:"flex", alignItems:"center", justifyContent:"center", paddingBottom: "20px" }}>
          <img style={{ maxWidth: "95%", marginTop: "50px", maxHeight: "150px" }} src={article.articleImage.asset.url}></img>
        </div>
        <div style={{ height: "20px", position: "absolute", left: "10px", bottom: "10px" }}>
          <p style={catStyle}>{article.category.map((c, i, a) => `${c.name}${a.length > i + 1 ? ", " : ""}`).join("")}</p>
        </div>
      </Columnizer>
    </div>
  )
}

export default ArticlePreview;
import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Centralizer from '../../../../components/Stucture/Centralizer/Centralizer';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import CSS from 'csstype';
import { useHistory } from 'react-router';
import useSlugerize from '../../../../hooks/useSlugerize';
import useDeslugerize from '../../../../hooks/useDeslugerize';
import { Article } from '../../../../../../../sanity-types';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 40, (x - window.innerWidth / 2) / 40, 1.01];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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

interface props {
  article: Article,
  onArticleClicked: () => void
}



const ArticleCard = ({ article, onArticleClicked }: props) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 20 } }));
  const history = useHistory();

  const onCategoryClickedEventHandler = (categoryName: string) => {
    history.push(`/category/${useSlugerize(categoryName)}`);
  }
  return (
    <animated.div
      className="articleCard"
      onClick={onArticleClicked}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}
    >
      <Columnizer>
        <div style={{ position: "absolute", top: 0, height: "60px", width: "100%" }}>
          <Centralizer>
            <p style={titleStyle}>{article.title}</p>
          </Centralizer>
        </div>
        <div style={{ height: "200px", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "20px" }}>
          <img style={{ maxWidth: "95%", marginTop: "50px", maxHeight: "150px" }} src={article.articleImage.asset.url}></img>
        </div>
        <div style={{ height: "20px", position: "absolute", left: "10px", bottom: "5px" }}>
          {article.category.map((c, i, a) => {
            return (
              <div key={c.name} style={{ display: "inline" }}>
                <span onClick={() => { onCategoryClickedEventHandler(c.name) }} className="articleCardCategory" >
                  {c.name}
                </span>
                <span>{i < a.length - 1 ? ", " : ""}</span>
              </div>
            )
          })}
        </div>
      </Columnizer>
    </animated.div>
  )
}

export default ArticleCard;

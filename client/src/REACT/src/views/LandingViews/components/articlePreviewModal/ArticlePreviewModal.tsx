import React from 'react';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import CSS from 'csstype';
import Centralizer from '../../../../components/Stucture/Centralizer/Centralizer';
import ZoomInTransition from '../../../../components/Transitions/zoomIn';
import { useQuery } from '@apollo/client';
import { GET_FULL_ARTICLE } from '../../../../queries/sanity/sanityQueries';

const titleStyle: CSS.Properties = {
  fontSize: ".9em",
  fontWeight: 800,
  margin: "10px 15px 5px 15px",
  lineHeight: "1.3em"
}
const subTitle: CSS.Properties = {
  fontSize: ".6em",
  fontWeight: 900,
  textAlign: "left",

}
const cardStyle: CSS.Properties = {
  position: "relative",
  height: "95vh",
  width: "600px",
  backgroundColor: "white",
  boxShadow: "1px 1px 400px 1px #C4C4C4",
  margin: "20px auto 20px auto",
  overflowY: "scroll",
  boxSizing: "border-box",
  padding: "50px"
}

const modalStyle: CSS.Properties = {
  position: "fixed",
  zIndex: 100,
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: "rgba(0, 0, 0, 0.5)"
}

interface props {
  article: Article,
  onExitModal: () => void,
}


const ArticlePreviewModal = ({ article, onExitModal }: props) => {
  const { loading, error, data } = useQuery<FullArticleData>(GET_FULL_ARTICLE, { variables: { id: article._id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(data);
  return (
    <div onClick={onExitModal} style={modalStyle}>
      <ZoomInTransition trigger={true}>
        <div style={cardStyle}>
          <main>
            {data.Article.overviewRaw.map(b => {
              return (
                React.createElement(b.style, {class: "article"}, b.children[0].text)
              )
            })}
          </main>
        </div>
      </ZoomInTransition>
    </div >
  )
}

export default ArticlePreviewModal;
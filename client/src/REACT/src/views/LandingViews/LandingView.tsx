import React from 'react';
import Rectangle from '../../components/Composition/Rectangle';
import CSS from 'csstype';
import useCompositionColor from '../../hooks/useCompositionColor';
import Greeting from './components/greeting/Greeting';
import Centralizer from '../../components/Stucture/Centralizer/Centralizer';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import ColumnStroke from '../../components/Composition/ColumnStroke';
import { useQuery } from '@apollo/client';
import { GENERAL_PREVIEW_ARTICLES } from '../../queries/sanity/sanityQueries';
import ArticlePreview from './components/articlePreview/ArticlePreview';
import Columnizer from '../../components/Stucture/Columnizer/Columnizer';
import ArticleCard from './components/articleCard/articleCard';


const LandingView: React.FC = () => {

  const { loading, error, data } = useQuery<GeneralArticlesData>(GENERAL_PREVIEW_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <ViewLayoutWrapper>
      <ViewColumn widthInPercent={35}>
        <Centralizer>
          <div style={{ position: "absolute", top: "20px", width: "350px" }}>
            <Greeting />
            <div style={{ marginTop: "80px" }}>
              <img src="https://picsum.photos/320/250" alt="temp photo" />
            </div>
          </div>
        </Centralizer>
      </ViewColumn>
      <ViewColumn fadeScroll widthInPercent={25}>
        <div style={{marginTop: "50px", display: "flex", flexDirection:"column", alignItems:"center"}}>
          {/* {data.allArticle.map(a => {
            return (<ArticlePreview key={a.slug.current} article={a} />)
          }
          )} */}
          {data.allArticle.map(a => {
            return (<ArticleCard key={a.slug.current} article={a} />)
          }
          )}
        </div>
        
        <ColumnStroke style="grey" />
      </ViewColumn>
      <ViewColumn widthInPercent={25}>
        <ColumnStroke style="pink" />

        <ColumnStroke style="blue" />
      </ViewColumn>
    </ViewLayoutWrapper>
  )
}

export default LandingView;
import React, { useEffect, useState } from 'react';
import Greeting from './components/greeting/Greeting';
import Centralizer from '../../components/Stucture/Centralizer/Centralizer';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import ColumnStroke from '../../components/Composition/ColumnStroke';
import { useQuery } from '@apollo/client';
import { GENERAL_PREVIEW_ARTICLES } from '../../queries/sanity/sanityQueries';
import ArticleCard from './components/articleCard/articleCard';
import ArticlePreviewModal from './components/articlePreviewModal/ArticlePreviewModal';
import RegisterButton from './components/registerButton/RegisterButton';
import Columnizer from '../../components/Stucture/Columnizer/Columnizer';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import firebase from "firebase/app";
import "firebase/auth";
import LogInContainer from './components/logInContainer/LogInContainer';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import FadeInTransition from '../../components/Transitions/FadeIn';
import UPPGIFTmodal from './components/UPPGIFTmodal';

interface LandingViewState {
  showArticleModal: boolean,
  currentArticle?: Article,
  showUPPGIFT: boolean
}

const LandingView: React.FC = () => {
  const [state, setState] = useState<LandingViewState>({ showArticleModal: false, currentArticle: undefined, showUPPGIFT: false })

  const { loading, error, data } = useQuery<GeneralArticlesData>(GENERAL_PREVIEW_ARTICLES);

  console.log(data);


  //useeffect med tom depenency-array, vilket innebär att den bara körs en gång när komponenten mount:ar
  useEffect(() => {
    setTimeout(() => {
      setState(prev => ({ ...prev, showUPPGIFT: true }))
    }, 1500);
  }, [])

  return (
    <>
      <UPPGIFTmodal close={() => setState(prev => ({ ...prev, showUPPGIFT: false }))} show={state.showUPPGIFT} />
      <ViewLayoutWrapper>
        <ViewColumn widthInPercent={32}>
          <Centralizer>
            <div style={{ position: "absolute", top: "20px", width: "350px" }}>
              <Greeting />
              <Centralizer>
                <RegisterButton />
              </Centralizer>
              <div style={{ marginTop: "125px", height: "250px", width: "320px" }}>
                <img src="https://picsum.photos/340/230" alt="temp photo" />
              </div>
            </div>
          </Centralizer>
        </ViewColumn>
        <ViewColumn scrollable fadeScroll widthInPercent={28}>
          {loading && (
            <FadeInTransition length={400} trigger={true}>
              <LoadingScreen />
            </FadeInTransition>
          )}
          {error && <h1>Cant reach sanity, are you on localhost:1234 ? Are you connected to internet?</h1>}
          {!loading && !error && (
            <Columnizer>
              <div style={{ marginTop: "200px", paddingTop: "200px", paddingBottom: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {data.allArticle.map(a => {
                  return (<ArticleCard onArticleClicked={() => { setState(prev => ({ ...prev, currentArticle: a, showArticleModal: true })) }} key={a._id} article={a} />)
                }
                )}
              </div>
            </Columnizer>
          )
          }
          <ColumnStroke style="grey" />
        </ViewColumn>
        <ViewColumn widthInPercent={33}>
          <ColumnStroke style="pink" />
          <div style={{ width: "100%", height: "100%" }}>
            <Centralizer>
              <LogInContainer />
            </Centralizer>
          </div>
          <ColumnStroke style="blue" />
        </ViewColumn>
      </ViewLayoutWrapper>


      {state.showArticleModal && state.currentArticle &&
        <ArticlePreviewModal article={state.currentArticle} onExitModal={() => setState(prev => ({ ...prev, showArticleModal: false }))} />
      }
    </>
  )
}

export default LandingView;
import React, { useState } from 'react';
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

interface LandingViewState {
  showArticleModal: boolean,
  currentArticle?: Article
}

const LandingView: React.FC = () => {
  const [state, setState] = useState<LandingViewState>({ showArticleModal: false, currentArticle: undefined })

  const { loading, error, data } = useQuery<GeneralArticlesData>(GENERAL_PREVIEW_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
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
        <ViewColumn fadeScroll widthInPercent={28}>
          <Columnizer>
            <div style={{ marginTop: "200px", paddingTop: "200px", paddingBottom: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {data.allArticle.map(a => {
                return (<ArticleCard onArticleClicked={() => { setState(prev => ({ ...prev, currentArticle: a, showArticleModal: true })) }} key={a._id} article={a} />)
              }
              )}
            </div>
          </Columnizer>
          <ColumnStroke style="grey" />
        </ViewColumn>
        <ViewColumn widthInPercent={30}>
          <ColumnStroke style="pink" />
          <Columnizer>
          <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign In with Google
        </button>
        <button
          data-testid="signin-anon"
          onClick={() => {
            firebase.auth().signInAnonymously();
          }}
        >
          Sign In Anonymously
        </button>
        <button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Sign Out
        </button>
            <FirebaseAuthConsumer>
              {({ isSignedIn, user, providerId }) => {
                return (
                  <pre style={{ height: 300, overflow: "auto" }}>
                    {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                  </pre>
                );
              }}
            </FirebaseAuthConsumer>
          </Columnizer>
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
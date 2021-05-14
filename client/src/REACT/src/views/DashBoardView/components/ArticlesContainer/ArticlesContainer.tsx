import { useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { Article, GeneralArticlesData } from '../../../../../../../sanity-types';
import LoadingScreen from '../../../../components/LoadingScreen/LoadingScreen';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import { PageContext } from '../../../../contexts/pageContext';
import useGetChildAgeInMonths from '../../../../hooks/useGetChildAgeInMonths';
import { ARTICLES_FOR_CHILD_OF_AGE } from '../../../../queries/sanity/sanityQueries';
import ArticleCard from '../../../LandingView/components/articleCard/articleCard';
import ArticlePreviewModal from '../../../LandingView/components/articlePreviewModal/ArticlePreviewModal';

interface props {
  userChildren: [databaseUser.Child],
  ageArray: number[]
}


const ArticlesContainer = ({ userChildren: uc, ageArray }: props) => {
  const [page, setPage] = useContext(PageContext);
  console.log("User children", uc);

  const age = useGetChildAgeInMonths(uc[Object.keys(uc)[0]].birthDate);
  const { loading, error, data } = useQuery<GeneralArticlesData>(ARTICLES_FOR_CHILD_OF_AGE, { variables: { ageInMonths: age } });
  if (loading) return <LoadingScreen />
  if (error) console.log(error);
  console.log("ArticlesContainer data", data);
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
      }}
    ><h1 style={{
      fontWeight: 300

    }}>Kangaroos</h1>
      {error && <h1>Cant reach sanity, are you on localhost:1234 ? Are you connected to internet?</h1>}
      {!loading && !error && (
        <Columnizer>
          <div style={{ marginTop: "-20px", paddingBottom: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {data.allArticle.map(a => {
              return (<ArticleCard onArticleClicked={() => { setPage(prev => ({ ...prev, currentArticle: a, showArticleModal: true })) }} key={a._id} article={a} />)
            }
            )}
          </div>
        </Columnizer>
      )
      }
      
    </div>
  )
}

export default ArticlesContainer;
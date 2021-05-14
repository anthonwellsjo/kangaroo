import React, { useContext } from 'react';
import { PageContext } from '../../contexts/pageContext';
import { UserContext } from '../../contexts/userContext';
import ArticlePreviewModal from '../../views/LandingView/components/articlePreviewModal/ArticlePreviewModal';
import AddChildModal from '../Modals/AddChildModal';
import FocusOnRegisterBackdrop from '../Modals/FocusOnRegisterBackdrop';
import FadeInTransition from '../Transitions/FadeIn';

const GlobalModalLayer: React.FC = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  const [page, setPage] = useContext(PageContext);
  return (
    <div>
      {children}
      {(user as UserContextData).showNewChildModal && (
        <FadeInTransition trigger length={300}>
          <AddChildModal />
        </FadeInTransition>
      )}
      {(page as PageContextData).showFocusOnRegisterBackdrop && (
        <FadeInTransition trigger length={300}>
          <FocusOnRegisterBackdrop />
        </FadeInTransition>
      )}
      {page.showArticleModal && page.currentArticle &&
        <ArticlePreviewModal article={page.currentArticle} onExitModal={() => setPage(prev => ({ ...prev, showArticleModal: false }))} />
      }
    </div>
  )
}

export default GlobalModalLayer;
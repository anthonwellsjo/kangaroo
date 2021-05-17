import React, { createContext, useState } from 'react';

let page = {};
let setPage;

const PageContext = createContext([page, setPage])

const PageProvider: React.FC = ({ children }) => {
  const [page, setPage] = useState<PageContextData>({
    showKangarooBackdrop: false,
    loginAlreadyRegisteredUser: true,
    databaseUser: null,
    showFocusOnRegisterBackdrop: false,
    refreshDashboardView: false,
    showArticleModal: false, 
    currentArticle: undefined,
  });
  return (
    <PageContext.Provider value={[page, setPage]}>
      {children}
    </PageContext.Provider>
  )
};

export { PageContext };
export { PageProvider };


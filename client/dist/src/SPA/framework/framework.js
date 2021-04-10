export class Page {
    constructor({ pageTitle, pageName, slug, linkIconAbsolutePath, addEventListeners }) {
        this.addEventListeners = addEventListeners ? addEventListeners : undefined;
        this.pageTitle = pageTitle;
        this.pageName = pageName;
        this.slug = slug;
        this.linkIconAbsolutePath = linkIconAbsolutePath;
        this.render = () => "";
    }
}
export const refreshApp = (app) => {
    app.currentPage = app.pages.find(p => p.slug == window.location.hash);
    console.log("current Page", app.currentPage);
    document.body.innerHTML = app.render();
    app.addEventListeners();
    setTimeout(() => {
        app.slideInMain();
    }, 10);
};
export const Router = {
    routeTo: (app, nextPage) => {
        history.pushState({ prevUrl: window.location.href }, nextPage.pageTitle, `/${nextPage.slug}`);
    },
    configure: (app) => {
        window.onpopstate = () => {
            refreshApp(app);
        };
    }
};

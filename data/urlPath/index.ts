import urlPathDataType from "./dataTypes";

export const URL_PATH: urlPathDataType = {
    homePage: () => "/",
    aboutMe: () => "/about-me",
    projectsListView: () => "/projects",
    projectsDetailView: (projectId: string) => `/docs/projects/${projectId}`,
    blogsListView: () => "/blogs",
    blogsDetailView: (blogId: string) => `/docs/blogs/${blogId}`,
    contactMe: () => "/contact-me",
    docs: (path: string) => `/docs/${path}`,
};
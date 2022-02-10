import queryDataType from "../../helper/query/dataTypes";
import DataManager from "../manager";

export interface blogDataContainerDataType {
    id: string | number,
    blogTitle: string,
    blogDescription: string,
    blogTags: string[],
    creationDate: string,
    readTime: string,
    blogMarkdownLink: string;
}

export interface getBlogsDataPropsDataType {
    numberOfBlogs: number;
    query?: queryDataType;
}

class BlogDataContainer extends DataManager {
    constructor(public data: blogDataContainerDataType) {
        super(data);
    }
}

export default BlogDataContainer;
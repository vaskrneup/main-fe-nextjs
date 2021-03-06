// materialOceanic,tomorrow,vscDarkPlus
import utilsStyles from "../../../styles/Utils.module.scss";
import layoutStyles from "../../Layout/Layout.module.scss";
import MarkdownRenderer from "../../utils/MarkdownRenderer";
import projectDetailViewPropsDataType from "./dataTypes";

const ProjectDetailViewComponent = (props: projectDetailViewPropsDataType) => {
    return (
        <div className={layoutStyles.section}>
            <div className={utilsStyles.container}>
                <MarkdownRenderer
                    rawMarkdown={props.markdownData.rawMarkdown}
                />
            </div>
        </div>
    );
};

export default ProjectDetailViewComponent;
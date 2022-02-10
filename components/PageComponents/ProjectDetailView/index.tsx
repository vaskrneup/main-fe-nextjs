// materialOceanic,tomorrow,vscDarkPlus
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import utilsStyles from "../../../styles/Utils.module.scss";
import layoutStyles from "../../Layout/Layout.module.scss";
import MarkdownRenderer from "../../utils/MarkdownRenderer";
import projectDetailViewPropsDataType from "./dataTypes";

const ProjectDetailView = (props: projectDetailViewPropsDataType) => {
    const t = `
# Getting Started

Welcome to the Next.js documentation!

If you're new to Next.js we recommend that you start with the [learn course](https://nextjs.org/learn/basics/create-nextjs-app).

The interactive course with quizzes will guide you through everything you need to know to use Next.js.

If you have questions about anything related to Next.js, you're always welcome to ask our community on [GitHub Discussions](https://github.com/vercel/next.js/discussions).

#### System Requirements

- [Node.js 12.22.0](https://nodejs.org/) or later
- MacOS, Windows (including WSL), and Linux are supported

## Setup

We recommend creating a new Next.js app using \`create-next-app\`, which sets up everything automatically for you. To create a project, run:

\`\`\`bash
npx create-next-app@latest
# or
yarn create next-app
\`\`\`

If you want to start with a TypeScript project you can use the \`--typescript\` flag:

\`\`\`bash
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
\`\`\`

After the installation is complete:

- Run \`npm run dev\` or \`yarn dev\` to start the development server on \`http://localhost:3000\`
- Visit \`http://localhost:3000\` to view your application
- Edit \`pages/index.js\` and see the updated result in your browser

For more information on how to use \`create-next-app\`, you can review the [\`create-next-app\` documentation](/docs/api-reference/create-next-app.md).

## Manual Setup

Install \`next\`, \`react\` and \`react-dom\` in your project:

\`\`\`bash
npm install next react react-dom
# or
yarn add next react react-dom
\`\`\`

Open \`package.json\` and add the following \`scripts\`:

\`\`\`json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
\`\`\`

These scripts refer to the different stages of developing an application:

- \`dev\` - Runs [\`next dev\`](/docs/api-reference/cli.md#development) which starts Next.js in development mode
- \`build\` - Runs [\`next build\`](/docs/api-reference/cli.md#build) which builds the application for production usage
- \`start\` - Runs [\`next start\`](/docs/api-reference/cli.md#production) which starts a Next.js production server
- \`lint\` - Runs [\`next lint\`](/docs/api-reference/cli.md#lint) which sets up Next.js' built-in ESLint configuration

Next.js is built around the concept of [pages](/docs/basic-features/pages.md). A page is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a \`.js\`, \`.jsx\`, \`.ts\`, or \`.tsx\` file in the \`pages\` directory.

Pages are associated with a route based on their file name. For example \`pages/about.js\` is mapped to \`/about\`. You can even add dynamic route parameters with the filename.

Create a \`pages\` directory inside your project.

Populate \`./pages/index.js\` with the following contents:

\`\`\`jsx
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage
\`\`\`

So far, we get:

- Automatic compilation and bundling (with webpack and babel)
- [React Fast Refresh](https://nextjs.org/blog/next-9-4#fast-refresh)
- [Static generation and server-side rendering](/docs/basic-features/data-fetching/overview.md) of [\`./pages/\`](/docs/basic-features/pages.md)
- [Static file serving](/docs/basic-features/static-file-serving.md). \`./public/\` is mapped to \`/\`

In addition, any Next.js application is ready for production from the start, read more in our [Deployment documentation](/docs/deployment.md).
    
    `;
    return (
        <div className={layoutStyles.section}>
            <div className={utilsStyles.container}>
                <MarkdownRenderer
                    rawMarkdown={t}
                />
            </div>
        </div>
    );
};

export default ProjectDetailView;
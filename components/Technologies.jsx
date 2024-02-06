import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <div id="skills">
      <h2 className="text-5xl font-semibold capitalize mb-14 text-center text-gray-900">
        My skills
      </h2>
      <main className="container mx-auto pt-10 pb-20 flex justify-around text-center">
        <div className="my-10 px-14">
          <section>
            <h1 className="mb-4 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
              Tech Stack
            </h1>
            <p className="text-content py-2 lg:max-w-3xl">
              Technologies I've been working with recently
            </p>
          </section>
          <section className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-10  pt-6 ">
            <img src="./html.png" title="html" alt="mknch" />
            <img src="./css.png" title="html" alt="mknch" />
            <img src="./js.png" title="html" alt="mknch" />
            <img src="./react.png" title="html" alt="mknch" />
            <img src="./redux.png" title="html" alt="mknch" />
            <img src="./tailwind.png" title="html" alt="mknch" />
          </section>
        </div>
        <div className="w-1 bg-greenbg"></div>
        <div className="my-10 px-14">
          <section>
            <h1 className="text-2xl mb-4 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
              Tools
            </h1>
            <p className="text-content py-2 lg:max-w-3xl">
              Technologies I've been working with recently
            </p>
          </section>
          <section className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-10 pt-6 ">
            <img src="./vscode.png" title="html" alt="mknch" />
            <img src="./git.png" title="html" alt="mknch" />
            <img src="./github.png" title="html" alt="mknch" />
            <img src="./figma.png" title="html" alt="mknch" />
            <img src="./npm.png" title="html" alt="mknch" />
            <img src="./postman.png" title="html" alt="mknch" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Technologies;

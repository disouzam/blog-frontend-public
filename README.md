# About
This repository contains code and other artifacts for the frontend of a personal blog where I share my experience, experimentation and opinions in some fields like metallurgy, computer science and software engineering

# Initial decisions

React was chosen as the library to build this project since 1) it is a popular library and 2) I have some basic experience with React in projects at my current employer. Regarding the second reason, experience here means that I had to read, run and debug React code in two reasonably large projects and that I had also made small maintenance in the same projects. More recently, now in March 2025, I took a beginners' course by Bob Ziroll on freeCodeCamp YouTube channel that gave me confidence to create this project using React.

The section ***React + TypeScript + Vite*** below was provided with the vite template created using ```npm create vite@latest``` and represents the basic instruction to be followed in this project.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Deployment

The build and deploy is done via GitHub Actions configured to use resources in Azure - starting with a free App Service Plan that might be enough for this initial stage of this personal project.

Almost everything went fine after the adjustments made in commits [***Commit 2a1d197***: Minor adjustments in zipping step to only add to zip file the files under folder `dist`](https://github.com/disouzam/blog-frontend/commit/2a1d197befca710ea6ada493abb38e9829226fb8) and [***Commit 81f7211***: Modified folder that will be deployed](https://github.com/disouzam/blog-frontend/commit/81f7211610bef3818b38f088406ef141922bcaac) but there was a detail that I missed / didn't know since I develop in Windows and the app service runs on Linux: it is required to add a special command on startup of App Service.

```shell
pm2 serve /home/site/wwwroot --no-daemon
```

These two blog posts detail the reason for this command:

- [Como usar PM2 com Node.js em Produção *by Daniel Castro*](https://danieldcs.com/como-usar-pm2-com-node-js-em-producao/)
- [How to deploy a Vite React app to Azure App Service using CI/CD Pipelines(GitHub Actions) *by Jane's Front-end Diary*](https://medium.com/@janesfrontenddiary/how-to-deploy-a-vite-react-app-to-azure-app-service-using-ci-cd-pipelines-github-actions-1cee30d49ab0)

# How to run app locally

To run app locally, you need to have node installed, currently using v22.14.0, clone repository, go to root folder of the repository and run the following command

```shell
npm run dev
```
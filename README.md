# Installation

1. Run `cd frontend-bootstrap-app`
2. Install packages `npm install`
3. Go into core folder `cd core`
4. Install packages `npm install`
5. Run `cd ..`
6. Go into application folder `cd application`
7. Install packages `npm install`
8. Run `npm start`

In your Visual Studio Code you need to:

- install _ESLint_ extension
- add next lines in your VS Code settings.json (⇧⌘P -> Open Settings (JSON))

  `
  "editor.formatOnSave": true,
  `
  
  `
  "eslint.autoFixOnSave": true,
  `
  
  `
  "eslint.alwaysShowStatus": true,
  `
  
  `
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ]
  `

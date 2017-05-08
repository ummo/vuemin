module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name",
      "default": "vuemin"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A vue-base project starter"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    
  },
  "skipInterpolation": "src/**/*.*",
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev"
};

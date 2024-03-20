module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Reactコンポーネントを作成します",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "コンポーネント名を入力してください（例 Button）",
      },
      //   {
      //     type: "input",
      //     name: "path",
      //     message:
      //       "コンポーネントを生成するパスを入力してください（例 src/components/parts/Button）",
      //   },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/index.ts",
        templateFile: "plop-templates/index.ts.hbs",
      },
    ],
  });
};

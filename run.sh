#!/bin/bash
echo "What is the name of the project (use snake case, e.g. hello-world)?"
echo "Enter the same name when promted by Next.js setup"
read projectName

yarn create next-app --typescript

cd $projectName

echo ""
echo 'Install Prettier'
yarn add prettier eslint-config-prettier --dev

echo ""
echo "Adding prettier config file"
echo '{
  "endOfLine": "auto",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}' > .prettierrc

echo ""
echo "Adding editorconfig file"
echo 'root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true' > .editorconfig

echo ""
echo "Adding remaining packages..."
yarn add styled-components react-grid-system react-i18next next-i18next
yarn add @types/styled-components

echo "Copying folder structure..."
rm -rf styles
cp -r ../folder-structure/. .


echo "All done! 🔥💯"
echo "Navigate to $projectName and run yarn dev to get started"
echo "Happy coding! 💻"

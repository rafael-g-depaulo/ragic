#!/bin/bash

./scripts/installDepsIfNotHere.sh

# Loga no NPM se necessário
if ! yarn npm whoami &>/dev/null; then
	yarn npm login
fi

# pega o tipo de versão
update_kind=$(echo "major | minor | patch | premajor | preminor | prepatch | prerelease" | sed 's/ | /\n/g' | fzf)

# Altera a versão nos package.jsons
npm version $update_kind &>/dev/null
cd ragic-lib
npm version --allow-same-version $update_kind &>/dev/null
cd ..
echo "✅ Package.json's atualizados"

# builda a lib
rm -rf dist/ragic-lib
yarn nx build ragic-lib &>/dev/null # builda a lib
echo "✅ Lib buildada"

cp ragic-lib/README.md dist/ragic-lib/README.md # copia o conteudo do README
echo "✅ Docs copiados"

cd dist/ragic-lib
npm publish --access=public
echo "✅ Lib publicada"

NEW_VERSION=$(cat ../ragic-lib/package.json | jq -r .version)
git add -A
git commit -m "Updating to version v$NEW_VERSION" &>/dev/null
git tag "v$NEW_VERSION"
echo "✅ Commit e tag v$NEW_VERSION criados!"
echo "------------------------"
echo "✅ Done!"

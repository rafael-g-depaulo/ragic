#!/bin/bash
read -p "Update type: " updKind       # checa qual tipo de update
npm login                             # loga no NPM
cd ragic-lib
npm version $updKind                  # altera o nº da versao no pckg.json
cd ..
yarn nx build ragic-lib               # builda a lib
if [[ -e dist/ragic-lib/README.md ]]; # checa se existe um README no output
then 
  echo "Readme exists"
else
  echo "Creating readme"
  cd dist/ragic-lib       # entra no diretorio dos outputs
  touch README.md         # cria um README.md vazio
  cd ../..                # retorna pro diretorio anterior
fi 

cp ragic-lib/README.md dist/ragic-lib/README.md # copia o conteudo do README
cd dist/ragic-lib
npm publish --access=public
echo "Done!"

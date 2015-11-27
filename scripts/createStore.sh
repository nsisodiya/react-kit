#!/bin/bash

CDIR=$PWD/../src/js/bl/store
StoreName=$1

if [ -z $StoreName ]
then
 echo "Error - Store Name not supplied"
 exit 1
fi

newFile=$CDIR/$StoreName.js
if [ -f "$newFile" ]; then
  echo "Error - Store $StoreName Already Exist"
  exit 1
fi

echo "Welcome to React! Now generating $StoreName Store for you"

cat > $newFile << EndOfMessage
import GenerateSingletonStore from './GenerateSingletonStore.js';

module.exports = GenerateSingletonStore({
	INIT: function (state) {

	}
});
EndOfMessage

echo "Generated $newFile"

git add $newFile
exit 0
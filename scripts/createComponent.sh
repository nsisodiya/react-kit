#!/bin/bash


### TODO - make this script as node script rather than bash script

CDIR=$PWD/../src/components
ComponentName=$1

if [ -z $ComponentName ]
then
 echo "Error - Component Name not supplied"
 exit 1
fi

newDir=$CDIR/$ComponentName
if [ -d "$newDir" ]; then
  echo "Error - Component $ComponentName Already Exist"
  exit 1
fi

echo "Welcome to React! Now generating $ComponentName Component for you"
mkdir -pv $newDir


cat > $newDir/$ComponentName.js << EndOfMessage
import React, {Component} from 'react';
import styles from './$ComponentName.css';
import CSSModules from 'react-css-modules';

class $ComponentName extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: '$ComponentName'
		};
		console.log("%c $ComponentName Component -> Init ", 'background: red; color: white');
	}

	render() {
	  console.log("%c $ComponentName Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					This is {this.state.name} Component
				</div>
		);
	}
}
$ComponentName.defaultProps = {};
$ComponentName.propTypes = {};
export default CSSModules($ComponentName, styles);
EndOfMessage

echo "Generated $newDir/$ComponentName.js"

cat > $newDir/$ComponentName.css << EndOfMessage
.container {
	position: relative;
}
EndOfMessage

echo "Generated $newDir/$ComponentName.css"

git add $newDir/$ComponentName.css
git add $newDir/$ComponentName.js

exit 0
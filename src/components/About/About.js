import React, {Component} from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';
import util from '../../common/util';

import {PageHolder} from '../../common/simpleReactRouter';

class About extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'About',
			pageHolded: true
		};
		console.log("%c About Component -> Init ", 'background: red; color: white');

		PageHolder.hold('You have some Unsaved Changes on this Page, Are you sure ?');

		var self = this;
		this.subID = window.setTimeout(() => {
			PageHolder.unHold();
			self.setState({
				pageHolded: false
			});
		}, 6000);

	}

	componentWillUnmount() {
		window.clearTimeout(this.subID);
		PageHolder.unHold();
	}

	render() {
		console.log("%c About Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					{
						util.iff(this.state.pageHolded,
								<b>This Page load with HOLDED state for 6 second</b>,
								<b>Page is not HOLDED</b>
						)
					}
					<input placeholder="Type Something" type="text"/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum pretium nisi, vitae tincidunt
						ligula commodo eu. Donec egestas interdum nibh, vel posuere nisi sagittis id. Morbi ut feugiat odio. Duis
						ultrices posuere euismod. Quisque sodales, nisi ut pellentesque commodo, ligula nisl imperdiet libero, in
						molestie lectus elit eu urna. Curabitur consequat metus sit amet euismod lacinia. Aenean gravida porttitor
						purus a tempus. Maecenas condimentum, sapien ac dictum dignissim, enim ipsum dictum nisl, vitae eleifend
						nibh purus vitae tellus. Aenean ligula erat, tristique eget tincidunt vel, porta at nisi. Phasellus nec est
						fermentum, pulvinar neque at, euismod orci. Aliquam vehicula magna et diam pellentesque congue. Cras commodo
						egestas metus, at ultricies leo consectetur quis. Fusce tristique mauris diam, tristique ultricies leo
						efficitur ac. Sed tempus rutrum ligula. Praesent at diam ultricies, tincidunt ipsum nec, ullamcorper mauris.
						Aliquam id lectus et arcu volutpat tincidunt.
					</p>
					<p>
						In vulputate maximus euismod. Ut ut odio nisl. Pellentesque habitant morbi tristique senectus et netus et
						malesuada fames ac turpis egestas. Quisque a sem odio. Praesent a cursus nibh. Morbi felis tellus, bibendum
						ac dignissim a, efficitur sed quam. Cras eget nisi vel erat gravida facilisis imperdiet vitae enim. Fusce
						sagittis consectetur cursus. Phasellus ut fermentum odio. Praesent tristique diam a sagittis volutpat.
						Quisque ut enim ac turpis feugiat auctor ut nec sem. Maecenas aliquet magna sed ex faucibus feugiat.
						Pellentesque sed dui volutpat, eleifend eros id, dictum metus. Sed fermentum dolor eu eros venenatis
						maximus.
					</p>
				</div>
		);
	}
}
About.defaultProps = {};
About.propTypes = {};
export default CSSModules(About, styles);
import React from 'react'
import { render } from 'react-dom'

import ReactFlowPlayer from 'react-flow-player'

const rootElement = document.querySelector('#root')
if (rootElement) {
	render(
		<ReactFlowPlayer
			playerInitScript="http://releases.flowplayer.org/7.2.1/flowplayer.min.js"
			playerId="reactFlowPlayer"
			sources={[
				{
					type: 'video/flash',
					src: 'rtmp://35.240.131.235/live/wawajimini21',
				},
			]}
			customButton={[
				{
					component: <a id="custom-btn">Custom React Component</a>,
					class: 'fp-controls > .fp-volume',
					id: 'custom-btn',
					place: 'before',
				},
			]}
			rtml={{
				url: 'rtmp://35.240.131.235/live/wawajimini21',
				rtmpt: false,
			}}
			bgcolor="#006688"
		/>,
		rootElement
	)
}

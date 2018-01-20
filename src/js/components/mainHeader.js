import React from 'react';


function LargeText(props){
	return <h1>{props.text}</h1>
}

function MainHeader(){
	return(
		<div id='title'>
			<LargeText text = 'Library Catalog'/>
		</div>
	);
}

export default MainHeader;
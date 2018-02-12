import React from 'react';

const mainHeaderStyle = {
	backgroundColor:'tan',
 	verticalAlign: 'top',
 	height:'140px',
 	width:'100%',
 	padding:'20px'
}

const titleStyle = {
	backgroundColor:'white',
	margin:'auto',
	width:'55%',
	textAlign: 'center',
	fontSize:'4.5em',
	padding:'10px'

}
 

function MainHeader(){
	return(
		<div>
			<div id='header' style={mainHeaderStyle}></div>
			<h1 style={titleStyle}>Library Catalog</h1>
		</div>
	);
}

export default MainHeader;
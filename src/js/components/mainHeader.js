import React from 'react';
/*import image from '../../img/bookBackground.png';
*/
const mainHeaderStyle = {
	backgroundColor:'#AFD275',
 	verticalAlign: 'top',
 	height:'140px',
 	width:'100%',
 	padding:'20px'
}

const titleStyle = {
	backgroundColor:'white',
	margin:'auto',
	width:'30%',
	textAlign: 'center',
	fontSize:'3em'

}
 

function MainHeader(){
	return(
		<div id='test' style={mainHeaderStyle}>
			<h1 style={titleStyle}>Library Catalog</h1>
		</div>
	);
}

export default MainHeader;
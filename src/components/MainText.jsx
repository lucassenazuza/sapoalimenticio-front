import React from 'react';

function MainText(props) {
    const textStyle = {backgroundColor:"#E5E9F2", color:"#111111", fontSize:"50px", margin:"100px 400px 50px 400px", textAlign:"center"};
    return (
        <div style={textStyle}>
            Bem-vindo ao <i style={{color:"#47525E"}}>Sapo Alimentício</i> , aqui você irá encontrar informações nutricionais dos principais alimentos do mercado.
        </div>
    );
}

export default MainText;
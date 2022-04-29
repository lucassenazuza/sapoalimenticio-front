import React from 'react';

function Scroll(props) {
    const styleScroll = {margin:"50px 400px 50px 400px", textAlign:"center"};

    return (
        <div style={styleScroll}>
            <img src={props.name}/>
        </div>
    );
}

export default Scroll;
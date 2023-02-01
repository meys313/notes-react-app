import React from 'react';

const Context = React.createContext({
    flexDirection: String,
    onFlexDirectionHandler: (props)=>{}
});

export default Context;
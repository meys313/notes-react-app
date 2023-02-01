import React from "react";
import {useState} from "react";

import Context from "./context";

const ContextProvider = props => {

    // обработка изменения отображения записей row/column
    const [flexDirection, setFlexDirection] = useState('row');
    const onFlexDirectionHandler = (btn) => {
        if(btn === 'row'){
            setFlexDirection('row');
        }
        else if(btn === 'column'){
            setFlexDirection('column');
        }

    }

    const contextData = {
        flexDirection: flexDirection,
        onFlexDirectionHandler: onFlexDirectionHandler
    }

    return <Context.Provider value={contextData}>{props.children}</Context.Provider>
}

export default ContextProvider;



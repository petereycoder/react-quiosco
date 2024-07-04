import { createContext } from 'react'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const auntenticado = true;

    return (
        <QuioscoContext.Provider
            value={{
                auntenticado
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext

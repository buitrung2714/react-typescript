import { createContext } from 'react'

interface ProgressContextChildren {
    children: React.ReactNode
}

interface ProgressContextDefault {
    lastTime: string
    status: string
}

const progressData = {
        lastTime: '11-09-2021',
        status: 'Online'     
    }

export const progressContext = createContext<ProgressContextDefault>(progressData);

const ProgressContextProvider = ({children}: ProgressContextChildren) => {
    
    return (
        <progressContext.Provider value={progressData}>
            {children}
        </progressContext.Provider>
    )
}

export default ProgressContextProvider

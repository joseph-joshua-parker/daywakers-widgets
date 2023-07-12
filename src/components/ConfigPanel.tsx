import { ReactNode, useState } from "react"
import NumParamPanel from "./NumParams/NumParamPanel"
import { Parameters, useNumParams } from "../hooks/useNumParams"
import {NumParamContextProvider} from "../contexts/NumParamContext"
import PatternPanel from "./Pattern/PatternPanel"
import { Stack } from "react-bootstrap"



const ConfigPanel = ()=>{
    const [stims, setStims] = useState('');

    return <Stack data-bs-theme="dark">
            <input value={stims} onChange={e=>setStims(e.target.value)}/>

            <NumParamContextProvider>
                <NumParamPanel param={Parameters.SECS_B_C}/> 
                <NumParamPanel param={Parameters.SECS_B_S}/> 
                <NumParamPanel param={Parameters.STIMS_P_C}/> 
            </NumParamContextProvider>

            <PatternPanel/>
        </Stack>
}

export default ConfigPanel;
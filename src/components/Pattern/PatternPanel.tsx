import Cell from "./Cell";
import {useContext, ReactNode} from 'react';
import { NumParamContext } from "../../contexts/NumParamContext";
import { Parameters } from "../../hooks/useNumParams";

const PatternPanel = ()=>{
    const {paramState} = useContext(NumParamContext);
     const SECS_B_C = paramState[Parameters.SECS_B_C];
     const SECS_B_S = paramState[Parameters.SECS_B_S];
     const STIMS_P_C = paramState[Parameters.STIMS_P_C];

    const cellCount = STIMS_P_C*SECS_B_S + SECS_B_C;
    const cellWidth = 100/cellCount;

    const patternArray = new Array<ReactNode>(cellCount).fill(<Cell width={cellWidth}/>)
    return <div className="pattern-array">{patternArray.map(cell=>cell)}</div>
     
    
}



export default PatternPanel;
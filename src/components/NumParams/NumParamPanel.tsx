import { ReactNode } from "react"
import {useContext} from 'react';

import { ChangeParam, Parameters } from "../../hooks/useNumParams"
import DeltaButtons from './DeltaButtons';

import {NumParamContext} from "../../contexts/NumParamContext";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

interface NumParamProps {
    children?: ReactNode;   
    param: Parameters;
}

const NumParamPanel: React.FC<NumParamProps> = ({children, param})=>{
    const {paramState, paramDispatch} = useContext(NumParamContext) 
    const value = paramState[param];
    const labelMap = {
        [Parameters.SECS_B_C]: 'Secs Between Clusts',
        [Parameters.SECS_B_S]: 'Secs Between Stims',
        [Parameters.STIMS_P_C]: 'Stims Per Clust'
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        paramDispatch(ChangeParam(param, parseInt(event.target.value)))
    }

    return <DeltaButtons param={param} value={value}>
            <FloatingLabel
                controlId="floatingInput"
                label={`${labelMap[param]}`}
                className="mb-3"
            >
                <Form.Control type="number" placeholder="" 
                    value={value} onChange={handleChange} />
            </FloatingLabel>
        </DeltaButtons>
}

export default NumParamPanel;
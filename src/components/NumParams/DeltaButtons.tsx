import {ReactNode, useContext, Fragment} from 'react';
import { Button, Stack } from 'react-bootstrap';




import { Parameters, DeltaParam } from '../../hooks/useNumParams';
import { NumParamContext } from '../../contexts/NumParamContext';

interface DeltaProps {
    param: Parameters
    children ?: ReactNode,
    value: number,
}


const DeltaButtons : React.FC<DeltaProps> = ({children, value, param})=>{
    const {paramState, paramDispatch} = useContext(NumParamContext);
    
    const canProduct = value > 5;
    const product = Math.trunc(value/2)
    const buttonSpace = canProduct ? 'col-1' : 'col-2' 

    const handleDelta = (delta:number)=>{
        paramDispatch(DeltaParam(param, delta));
    }


    return <Stack   className="justify-content-center" 
                    direction="horizontal" gap={0}
                    data-bs-theme="dark">
                {canProduct && 
                    <Button variant="dark" className="col-2" onClick ={()=>handleDelta(-product)}>-{product}</Button>
                }

                <Button variant="dark" className={`${buttonSpace}`} onClick ={()=>handleDelta(-1)}>{-1}</Button>

                {children}

                <Button variant="dark" className={` ${buttonSpace}`}  onClick={()=>handleDelta(1)}>+{1}</Button>
                    
                {canProduct &&
                    <Button variant="dark" className="col-2" onClick={()=>handleDelta(product)}> +{product}</Button>
                }
                    
            </Stack>
}

export default DeltaButtons;
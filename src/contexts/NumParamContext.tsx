import {Dispatch, createContext} from 'react';
import { ParamAction, ParamState } from '../hooks/useNumParams';
import { useNumParams } from '../hooks/useNumParams';
import { Parameters } from '../hooks/useNumParams';
import {ReactNode} from 'react';


export interface IDispatchContext {
  paramState: ParamState;
  paramDispatch: Dispatch<ParamAction>;
}

interface NumParamContextProps {
  children: ReactNode;
  initialParams?: ParamState;
}

const NumParamContext = createContext<IDispatchContext>({
  paramState: {
    [Parameters.STIMS_P_C]: 10,
    [Parameters.SECS_B_S]: 2,
    [Parameters.SECS_B_C]: 10,
  },
  paramDispatch: () => {},
});

const NumParamContextProvider: React.FC<NumParamContextProps> = ({
  children,
  initialParams = {
    [Parameters.STIMS_P_C]: 10,
    [Parameters.SECS_B_S]: 2,
    [Parameters.SECS_B_C]: 10,
  },
}) => {
  const [paramState, paramDispatch] = useNumParams(initialParams);

  return (
    <NumParamContext.Provider value={{ paramState, paramDispatch }}>
      {children}
    </NumParamContext.Provider>
  );
};

export { NumParamContext, NumParamContextProvider };

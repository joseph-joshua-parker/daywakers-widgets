interface CellProps {
    status?: number
    width:number
}

const Cell: React.FC<CellProps> = ({status=0, width})=>{
    return <button style={{width: `${width}%`, boxSizing: 'border-box',padding: 0}}
                        className="button is-dark">{status}</button>
}

export default Cell;
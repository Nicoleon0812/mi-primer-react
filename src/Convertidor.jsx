import {useState} from 'react'

function ConvertirPesos() {
    const [pesos, setPesos] = useState(0)
    const dolares = pesos / 950

    return (
        <div style = {{ border: '1px solid red', padding: '20px', margin: '20px', borderRadius: '10px'}}>
            <h4>Convertidor de CLP a USD</h4>
            <input
                type="number"
                placeholder = "0"
                value={pesos}
                onChange={ (e) => setPesos(e.target.value)}
                style={{ padding: '10px', width: '80%'}}
            />
            <p style={{color: 'white', fontSize: '20px'}}>
                Valor en USD: ${dolares.toFixed(2)}          
            </p>
            {pesos < 1000 && <h4 style ={{color: 'yellow'}}>Necesitas al menos $1.000 para cambiar</h4>}    
        </div>
    )

}

export default ConvertirPesos
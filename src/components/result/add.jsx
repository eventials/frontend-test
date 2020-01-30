import React, {useState} from 'react'

export default (props)=>{
    const [population,setPopulation] = useState(props.population||0)
    return(
        <div className="subContainer">
            Inserir população de <strong>{props.country.name}</strong> :
            <div>
                <input className="input" type="number" min="0" step="1000" value={population} onChange={e=>setPopulation(e.target.value)}/>
            </div>
            <button className="btn btnGreen" onClick={()=>props.addPopulation(population)}>Adicionar</button>
        </div>
    )
}
import React, {useState} from 'react'

export default (props)=>{
    const [code,setCode] = useState(props.country.code)
    const [name,setName] = useState(props.country.name)
    const [population,setPopulation] = useState(props.country.population||0)
    return(
        <div className="subContainer" >
            <div>
                <h4>Codigo :</h4>
                <input className="input" name="code" value={code} onChange={e=>setCode(e.target.value)}/>
            </div>
            <div>
                <h4>Nome :</h4>
                <input className="input" name="name" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <h4>População :</h4>
                <input className="input" name="population" value={population} onChange={e=>setPopulation(e.target.value)}/>
            </div>
            <button className="btn btnBlue" onClick={()=>props.editCountry(code,name,population)}>Salvar Alterações</button>
        </div>
    )
}
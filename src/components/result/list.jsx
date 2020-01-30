import React, {useState} from 'react'

export default (props)=>{
    const [countries,setCountries] = useState(props.countries)

    // Requisito 4, realiza a ordenação por população
    function orderCountries(){
        const order = props.countries.sort((a,b)=>{
            if(a.population && b.population)// se os dois paises possuirem população
                return a.population - b.population
            else if(a.population && !b.population)//se somente o pais anterior possuir população ele terá prioridade
                return -1
            else if(!a.population && b.population)//se somente o pais posterior possuir população ele terá prioridade
                return 1
            else return 0 //se nenhum pais possuir população, permanece
        })
        setCountries(order)
    }
    return(
        <div className="containerListar">
            <div className="btnGroup">
                <button className="btn btnPurplue"  onClick={()=>orderCountries()}>Ordenar por População</button>
            </div>
            <div className="list">
            {
                countries.map((c,i)=>
                <div className="country" key={i}>
                    <div><strong>Codigo:</strong> {c.code}</div>
                    <div><strong>Nome:</strong> {c.name}</div>
                    { c.population? <div><strong>População:</strong> {c.population} habitantes</div> : <div> Sem registro de população</div> }
                </div>)
            }
            </div>
        </div>
    )
}
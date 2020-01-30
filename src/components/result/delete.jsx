import React from 'react'

export default (props)=>{
    return (
        <div className="subContainer">
            <div className="nameCountry">
                <strong>{props.country.name}</strong>
            </div>
            <div className="btnGroup">
                <button className="btn btnPurplue" onClick={()=>props.delAttr('code')} >Deletar Código</button>
                <button className="btn btnPurplue" onClick={()=>props.delAttr('name')} >Deletar Nome</button>
                <button className="btn btnPurplue" onClick={()=>props.delAttr('population')} >Deletar População</button>
            </div>
            <div className="btnGroup">
                <button className="btn btnRed btnDel" onClick={()=>props.delCountry()} >Deletar País</button>
            </div>
        </div>
    )
}
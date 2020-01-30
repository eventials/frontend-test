import React,{ Component } from 'react'
import Countries from '../../api/country'
import Add from './add'
import Edit from './edit'
import Delete from './delete'
import List from './list'
import { injectGlobal } from 'styled-components';

export default class Result extends Component{
    constructor(){
        super()
        this.state = {
            countries:[],
            select:'',
            country:{},
            msg:'',
            add:false,
            edit:false,
            delete:false,
            list:false
        }

        this.addPopulation = this.addPopulation.bind(this);
        this.editCountry = this.editCountry.bind(this);
        this.delAttr = this.delAttr.bind(this);
        this.delCountry = this.delCountry.bind(this);

    }

    componentDidMount(){
        Countries(true).then(result => this.setState({countries:result,select:result[0].name,country:result[0]}))
                        .catch(err => this.setState({msg:'Ocorreu um problema na API, atualize a pagina por favor!'}))
        
        // Requisito 7, Estilização
        injectGlobal`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        .containerResult{
            width:100%;
            height: 80vh;
            font-family: 'Roboto', sans-serif;
            padding: 2%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
        }

        .containerResult > .firstColumn{
            width:55%;
            height: 100%;
            border-right: 1px groove black;
            text-align: center;
        }

        .dropdown{
            width: 60%;
            padding: 1%;
            margin-bottom: 4%;
            margin-top: 4%;
            border-radius: 10px;
            text-align: center;
        }

        .btnGroup{
            width:100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .btn{
            padding: 2px;
            width: 9rem
            height: 2.2rem;
            border-radius: 5px;
            border-style: none;
            cursor: pointer;
        }
        .btnRed{
            background-color: #FF5337;
        }
        .btnGreen{
            background-color: #32CD32;
        }
        .btnBlue{
            background-color: #00BBEE;
        }
        .btnPurplue{
            background-color: #836FFF;
        }
        .btn:hover{
            //font-weight: bold;
            box-shadow: 2px 2px #888888;
        }
        .btnDel{
            margin: 2%;
        }
        
        .subContainer{
            padding: 3%;
            margin-top: 10%;
        }
        
        .input{
            border-radius: 6px;
            border-style: groove;
            text-align: center;
            height: 1.5rem;
            margin: 2%;
        }
        
        .nameCountry{
            margin-bottom: 8%;
        }
        
        .secondColumn{
            width: 45%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .containerListar{
            padding: 5%;
            height: 100%;
        }

        .list{
            margin: 2%;
            height: 100%;
            overflow-y: scroll;
        }

        .country{
            margin: 1.5%;
        }
        .country :hover{
            background-color:#d3d3d3;
            border-radius:5px;
        }
        

        @media only screen and (max-width: 600px) {
            .containerResult{
                flex-direction: column;
                align-items: center;
            }
            .firstColumn{
                width: 80%;
            }
        `;
    }

    // Seleção do país pelo dropdown e ocultamento dos formularios
    handleChangeSelect(e){
        const respCountry = this.state.countries.find(country=>{
            if(country.name === e.target.value)
            return country
        })
        this.setState({
            select:e.target.value,
            country:respCountry,
            add:false,
            edit:false,
            delete:false
        })
    }

    // Requisito 3, onde faz o registro da população
    addPopulation(population){
        this.setState(state=>{
            const countries = state.countries.map(country=>{
                if(country.name === state.country.name)
                    country.population = population;
                return country;
            })
            
            return{
                countries,
                add:false
            }
        })
    }

    // Requisito 5, onde realiza a alteração das informações do país
    editCountry(code,name,population){
        this.setState(state=>{
            const countries = state.countries.map(country=>{
                if(country.name === state.country.name){
                    country.code = code;
                    country.name = name;
                    country.population = population;
                }
                return country;
            })
            
            return{
                countries,
                edit:false
            }
        })
    }

    // Requisito 6, onde é deletado uma informação do país
    delAttr(attr){
        this.setState(state=>{
            const countries = state.countries.map(country=>{
                if(country.name===state.country.name)
                    if(attr === 'code')country.code = ''
                    else if(attr === 'name')country.name = ''
                    else if(attr === 'population')country.population = ''
                return country;
            })
            
            return{
                countries,
                delete:false
            }
        })
    }

    // Requisito 6, onde é deletado o próprio país e atualização do primeiro pais para corrigir se o primeiro for deletado
    delCountry(){
        this.setState(state=>{
            const countries = state.countries.filter(country=>{
                if(country.name !== state.country.name)
                    return country;
            })

            return{
                countries,
                delete:false,
                country:countries[0],
                select:countries[0].name,
            }
        })
    }

    render(){
        return (
            <div className="containerResult">
                <div className="firstColumn">
                    <strong>{this.state.msg}</strong>
                    <div>
                        <select className="dropdown" value={this.state.select} onChange={e=>this.handleChangeSelect(e)}>
                            {
                                this.state.countries.map((c,i)=>
                                <option key={i} value={c.name}>{c.name}</option>)
                            }
                        </select>
                        <div className="btnGroup">
                            <button className="btn btnGreen" onClick={()=>this.setState({add:true,edit:false,delete:false})}>Adicionar População</button>
                            <button className="btn btnBlue" onClick={()=>this.setState({add:false,edit:true,delete:false})}>Atualizar Informações</button>
                            <button className="btn btnRed" onClick={()=>this.setState({add:false,edit:false,delete:true})}>Deletar Informação</button>
                        </div>

                        {this.state.add?<Add country={this.state.country} addPopulation={this.addPopulation} />:<div></div>}
                        {this.state.edit?<Edit country={this.state.country} editCountry={this.editCountry} />:<div></div>}
                        {this.state.delete?<Delete country={this.state.country} delAttr={this.delAttr} delCountry={this.delCountry}/>:<div></div>}
                    </div>
                </div>
                <div className="secondColumn">
                    <div>
                        <button className="btn btnBlue" onClick={()=>this.setState({list:!this.state.list})}>Listar</button>
                    </div>
                    
                    {this.state.list?<List countries={this.state.countries} />:<div></div>}
                </div>
            </div>
        )
    }
}
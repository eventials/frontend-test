import React, {useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectBox from '../features/select-box';

function Cadastrar() {
    const [name, setName] = useState('');//Not using redux here because the name its important just in the submit
    let people = useSelector(state => state.people);
    const country = useSelector(state => state.country);
    let obj = useState({
            name: '',
            country: ''
        }
    );
    const dispatch = useDispatch();

    async function mudacor(){
        document.getElementById("labelName").style.color = '#ACACAC';
    }

    async function handleSubmit() {
        if(country && document.getElementById("username").value)
        {
            country.population += 1; 
            obj = {
                id: people[people.length-1].id + 1,
                name,
                country: country.name
            };
            people.push(obj);
            dispatch({ type: 'ADD_PEOPLE', people});
            setName('');
            document.getElementById("username").value = "";
            document.getElementById("username").focus();
        }
        else//CHANGE COLOR OF FIELD
        if(!document.getElementById("username").value)
        {document.getElementById("labelName").style.color = 'red'; document.getElementById("username").focus();}
    }

    return(
        <form>
            <div className="input-block">
                <label htmlFor="" id="labelName">*Name</label>
                <input name="username" id="username" required onChange={e => setName(e.target.value)} onClick={mudacor}/>
            </div>
            <div className="input-block" id='dropdown'>
                <SelectBox htmlFor="" id="countryId" required/>
            </div>
            <div className="input-block">
                <label htmlFor='myImage' id="minhalabel">SEND IMAGE</label>
                <input type="file" name="myImage" id='myImage' accept="image/x-png,image/jpeg"/>
            </div>
            
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default Cadastrar;
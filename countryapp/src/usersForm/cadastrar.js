import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import SelectBox from '../features/select-box';

function Cadastrar(onSubmit) {
    const [name, setName] = useState('');
    const county = useSelector(state => state.country);

    async function handleSubmit(e) {

        setName('');
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
            <label htmlFor="">Name</label>
            <input name="username" id="username" required onChange={e => setName(e.target.value)}/>
        </div>
        <div className="input-block" id='dropdown'>
            <SelectBox htmlFor="" name='countryId' required/>
        </div>
        <div className="input-block">
            <label htmlFor='myImage' id="minhalabel">SEND IMAGE</label>
            <input type="file" name="myImage" id='myImage' accept="image/x-png,image/jpeg"/>
        </div>
        
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    );
}

export default Cadastrar;
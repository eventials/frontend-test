import React, {useState} from 'react';
import SelectBox from '../features/select-box';
import paises from '../configs/country';
import pessoas from '../users/pessoa';

function Cadastrar({onSubmit}) {
    const [name, setName] = useState('');

    //FUNCAO PARA CADASTRAR
    async function handleSubmit(e) {


        setName('');
    }

    return(
        <form onSubmit={handleSubmit}>
        <div className="input-block">
            <label htmlFor="">Name</label>
            <input name="username" id="username" required onChange={e => setName(e.target.value)}/>
        </div>
        {/*style={{margin: '16px', position: 'relative'}*/}
        <div className="input-block" id='dropdown'>
            <SelectBox htmlFor="" name='countryId'
                       items={
                        paises
                       }
            />
        </div>

        {/* <div className="input-block">
            <label htmlFor="">Country</label>
            <input type="text" name="usercountry" id="usercountry" required onChange={e => setCountry(e.target.value)}/>
        </div> */}

        <div className="input-block">
            <label htmlFor='myImage' id="minhalabel">SEND IMAGE</label>
            <input type="file" name="myImage" id='myImage' accept="image/x-png,image/jpeg"/>
        </div>
        
        <button type="submit">Submit</button>
        </form>
    );
}

export default Cadastrar;
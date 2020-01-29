import React from 'react';

import './styles.css';

export default class SelectBox extends React.Component {

    state = {
        ...this.props,
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
    }

    dropDown = () =>
    {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectItem = (item) => this.setState({
        selectedItem: item,
        showItems: false
    })

    render() {
        return <> 
            <label htmlFor="">Select your country</label>
            <div className="select-box--box" >
                <div className="select-box--container">
                    <div className="select-box--selected-item">
                        { this.state.selectedItem.name }
                    </div>
                    <div onClick={this.dropDown}>
                        {/* <span className={`${this.state.showItems ? 
                            'select-box--arrow-up' : 'select-box--arrow-down'}`} /> */}
                            <span className='select-box--arrow-down'/>
                    </div>
                    <div style={{display: this.state.showItems ? 'block' : 'none'}} 
                        className="select-box--items">
                        {
                            this.state.items.map(item => 
                                <div 
                                    key={item.code}
                                    onClick={() => this.selectItem(item)}
                                    className={this.state.selectedItem === item ? 'selected' : ''}
                                    id='selecionador'
                                >
                                    { item.name + ' (Citizens: 3)'}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> 
            <input 
                type="hidden" 
                value={this.state.selectedItem.code} 
                name={this.state.name}
            />
        </>
    }
}
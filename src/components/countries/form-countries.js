import React, {useState, useEffect} from 'react';
import CountriesService from '../../api/country';
import {Col, Select, Input, Form, Button, message, Switch} from 'antd';
import {
    FormTitle,
    FormSubtitle,
    WrapperCountriesForm,
    WrapperFormTitles,
    WrapperSwitch,
} from './style';

const {Option} = Select;

const showMessage = (type, text) => {
    switch (type) {
        case 'error': {
            message.error(text);
            break;
        }
        case 'success': {
            message.success(text);
            break;
        }
        default: {
            message.warning('Type was not defined.');
        }
    }
};

const FormCountries = (props) => {
    const [form] = Form.useForm();
    const [disabledButtons, setDisabled] = useState(true);
    const [countries, setCountries] = useState([]);
    const [actionType, setActionType] = useState('none');
    const [order, setOrder] = useState(false);

    useEffect(() => {
        async function getCountries() {
            try {
                const response = await CountriesService();
                setCountries(response);
                showMessage('success', 'You can see the country list bellow');
            } catch (error) {
                showMessage(
                    'error',
                    'Something is wrong! Load countries failed. Reload the page, please!'
                );
            }
        }
        if (countries.length === 0) getCountries();
    });

    const fillInputPopulation = (value) => {
        const selectedIndex = getSelectedCountryIndex(value);
        const population = countries[selectedIndex].population || 0;
        form.setFieldsValue({population: population});
    };

    const getSelectedCountryIndex = (target) => {
        return countries.findIndex((item) => {
            return item.code === target;
        });
    };

    const handleOnSelectCountry = (value) => {
        fillInputPopulation(value);

        if (value) setDisabled(false);
        else setDisabled(true);
    };

    const deleteElement = (target) => {
        const newListCountries = countries.filter((item) => {
            return item.code !== target;
        });

        props.deleteEditedCountries(target);
        setCountries(newListCountries);
    };

    const savePopulationCountry = (values) => {
        const newListCountries = countries;

        newListCountries.forEach((item, index) => {
            if (item.code === values.country) {
                Object.assign(item, {
                    population: values.population,
                    key: item.code + index,
                });
                props.getEditedCountries(item);
            }
        });

        if (order) {
            newListCountries.sort((a, b) => (a.population || 0) - b.population);
            props.orderEditedCountries(order);
        }
        setCountries(newListCountries);
    };

    const onFinishedForm = (values) => {
        if (actionType === 'save') {
            if (values.population <= 0) {
                showMessage(
                    'error',
                    'You can not save a negative value or zero!'
                );
                return;
            }

            savePopulationCountry(values);
            showMessage(
                'success',
                `Saved the ${values.country.toUpperCase()} population: ${
                    values.population
                }`
            );
        }

        if (actionType === 'delete') {
            deleteElement(values.country);
        }

        form.setFieldsValue({population: 0});
        form.setFieldsValue({country: undefined});
        setDisabled(true);
    };

    const handleSwitchClick = () => {
        const newListCountries = countries;
        if (!order)
            newListCountries.sort((a, b) => (a.population || 0) - b.population);
        else newListCountries.sort((a, b) => a.name.localeCompare(b.name));

        props.orderEditedCountries(!order);
        setCountries(newListCountries);
        setOrder(!order);
    };

    const handleButtonClick = (type) => {
        setActionType(type);
    };

    return (
        <div>
            <WrapperFormTitles>
                <FormTitle>Select some country do you prefer.</FormTitle>
                <FormSubtitle>Tell us him population!</FormSubtitle>
            </WrapperFormTitles>
            <WrapperCountriesForm>
                <Form
                    form={form}
                    hideRequiredMark={false}
                    name="countries"
                    onFinish={onFinishedForm}
                >
                    <Col style={{display: 'flex', flexWrap: 'nowrap'}}>
                        <Form.Item
                            label="Country"
                            name="country"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a country!',
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                style={{width: 175}}
                                placeholder="Select a country"
                                optionFilterProp="children"
                                allowClear={true}
                                onSelect={handleOnSelectCountry}
                                filterOption={(input, option) =>
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {countries.map((item) => {
                                    return (
                                        <Option
                                            key={item.code}
                                            value={item.code}
                                        >
                                            {item.name}
                                        </Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>
                        <WrapperSwitch>
                            <span>Order</span>
                            <Switch size="small" onClick={handleSwitchClick} />
                        </WrapperSwitch>

                        <Form.Item
                            label="Population"
                            name="population"
                            style={{marginLeft: '10px'}}
                        >
                            <Input
                                allowClear={true}
                                style={{width: 100}}
                                type={'number'}
                            />
                        </Form.Item>
                    </Col>
                    <Col
                        style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            justifyContent: 'flex-end',
                            marginRight: '45px',
                            marginTop: '10px',
                        }}
                    >
                        <Form.Item style={{marginRight: '10px'}}>
                            <Button
                                style={{
                                    width: '80px',
                                    fontFamily: 'Sans-serif',
                                }}
                                type="primary"
                                htmlType="submit"
                                danger
                                onClick={() => {
                                    handleButtonClick('delete');
                                }}
                                disabled={disabledButtons}
                            >
                                Delete
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{
                                    background: '#00AC07',
                                    width: '80px',
                                    fontFamily: 'Sans-serif',
                                }}
                                type="primary"
                                htmlType="submit"
                                onClick={() => {
                                    handleButtonClick('save');
                                }}
                                disabled={disabledButtons}
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
            </WrapperCountriesForm>
        </div>
    );
};

//<CaretUpOutlined style={{color: '#aeacac'}} />

export default FormCountries;

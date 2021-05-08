import React from 'React';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CounterApp from '../CounterApp';


configure({ adapter: new Adapter() })


describe('Pruebas en el <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp />);
    });


    test('Debe mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

test('Debe mostrar el valor por defecto de 100', () => {

    const wrapper = shallow( <CounterApp value={ 100 } /> );
    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe('100');
})

test('Debe incrementar con el botón +1', () => {

    const btn1 = wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('11');

})

test('Debe disminuir con el botón -1', () => {

    const btn2 = wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('9');

});

test('Debe colocar el valor por defecto con el btn reset', () => {
    
    const wrapper = shallow( <CounterApp value={ 105 } />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe( '105');

    console.log( counterText );
})


})
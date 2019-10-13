import React from 'react';
import ReactDOM from 'react-dom';
import App, {Transformer} from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('xml to json', () => {
    let xml = `<root>
                 <B>3</B>
                 <C>2</C>
              </root>`;
    let json = {"root":{"B":{"_text":"3"},"C":{"_text":"2"}}};
    let result = new Transformer(xml);
    expect(result.xmlToJSON(xml)).toBe(json)
});

it('json to xml', () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
    <B>3</B>
    <C>2</C>
</root>`;
    let json = { "_declaration": { "_attributes": { "version": "1.0", "encoding": "UTF-8" } }, "root": { "B": { "_text": "3" }, "C": { "_text": "2" } } };
    let result = new Transformer(json);
    expect(result.jsonToXML(json)).toBe(xml)
});
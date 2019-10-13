import React from 'react';
import ReactDOM from 'react-dom';
import App, {Transformer} from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('xml to json', () => {
    let xml = `<root> <B>3</B> <C>2</C> </root>`;
    let json = "{\n\"root\":{\"B\":\"3\",\"C\":\"2\"}\n}";
    let result = new Transformer(xml);
    let aaa = result.xmlToJSON(xml);
    expect(JSON.stringify(aaa)).toBe(JSON.stringify(json))
});


it('json to xml', () => {
    let xml = `<_declaration><_attributes><version>1.0</version><encoding>UTF-8</encoding></_attributes></_declaration><root><B><_text>3</_text></B><C><_text>2</_text></C></root>`;
    let json = `{ "_declaration": { "_attributes": { "version": "1.0", "encoding": "UTF-8" } }, "root": { "B": { "_text": "3" }, "C": { "_text": "2" } } }`;
    let result = new Transformer(json);
    let bbb = result.jsonToXML(json);
    expect(bbb).toBe(xml)
});
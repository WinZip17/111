import React, {Component} from 'react';
import './App.css';
import * as convert from "xml-js";


export class Transformer {

    constructor(info) {
        this.info = info;
    };

    xmlToJSON = () => {
        return convert.xml2json(this.info, {compact: true, spaces: 4});
    };

    jsonToXML = () => {
        var options = {compact: true, ignoreComment: true, spaces: 4};
        return convert.json2xml(this.info, options);;
    };

}




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }



    xmlToJSON = (info) => {
        let xml = info.currentTarget.form[0].value;
        let result = new Transformer(xml);
        return this.setState({result: result.xmlToJSON(xml)})
    };


    jsonToXML = (info) => {
        let json = info.currentTarget.form[0].value;
        let result = new Transformer(json);
        return this.setState({result: result.jsonToXML(json)})
    };


  render() {
    return (
        <div>
          <h3>xml to json</h3>
            <form>
                <textarea></textarea>
                <br/>
                <button type="button" onClick={this.xmlToJSON}>xml to json</button>
                <br/>

                <button type="button" onClick={this.jsonToXML}>json to xml</button>
            </form>

            <div>
                {this.state.result}
            </div>
        </div>
    );
  }
}

export default App;

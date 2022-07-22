import { Component } from 'react';
import Time from './time';
import Nombre from './nombre';



class App extends Component {
    constructor(props){
     super(props);
     this.state = {nombre:''};
     this.formularioSubmit = this.formularioSubmit.bind(this);
     }
     formularioSubmit() {
        this.setState({nombre: document.getElementById("nombre").value});
            console.log(this.state.nombre);
            alert("hola");
        }
    
    render() {
        const nombre = this.state.nombre;
        return(
  
           <div>
           <Time />
           <Nombre nombre={nombre} />
           <input type="submit"  value="Registrar" className="btn-enviar" onClick={this.formularioSubmit}/>
           </div>
        );
      }  
    }

  export default App;



import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Rodape from './componentes/Rodapes';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Skills from './componentes/skills';
import Contatos from './componentes/Contatos'
import Projetos from './componentes/Projetos'
class App extends Component  {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
        <Cabecalho />
        
        <Route path='/' exact component={Inicio}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/Projetos' component={Projetos}/>
        <Route path='/Contatos' component={Contatos}/>
        <Rodape />
        </div>
        </BrowserRouter>
  );
}
}

export default App;

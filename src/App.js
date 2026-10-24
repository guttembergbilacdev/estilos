
import React from 'react';
import { Container, Head, Titulo, BemVindo} from './styled';

function App() {
  return (
  <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>

      <BemVindo>
        Bem Vindo ao Sistema
      </BemVindo>
  </Container>

  ); 
}

export default App;

/*
<div className="container">
        <header className='header'>
            <a className='titulo'>Projeto Styled</a>
        </header>
        <h1>Bem Vindo ao Sistema</h1>
    </div>
  );
  */
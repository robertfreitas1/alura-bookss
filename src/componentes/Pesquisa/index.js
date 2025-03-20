import Input from '../Input';
import styled from 'styled-components';
import React, { useState } from "react";

const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 270px;
   width: 100%;
`;

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`;

const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`;

function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState(''); // Estado inicial

  const livros = ["React", "JavaScript", "Node.js", "Python", "CSS", "HTML"];

  // Filtra os livros com base na pesquisa
  const livrosFiltrados = livros.filter((livro) =>
    livro.toLowerCase().includes(textoDigitado.toLowerCase())
  );

  return (
    <PesquisaContainer>   
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      
      <Input 
        placeholder="Qual vai ser a sua próxima leitura?"
        onChange={evento => setTextoDigitado(evento.target.value)}
      />

      {/* Só mostra a lista se houver texto digitado */}
      {textoDigitado && (
        <ul>
          {livrosFiltrados.map((livro, index) => (
            <li key={index}>{livro}</li>
          ))}
        </ul>
      )}
    </PesquisaContainer>  
  );
}

export default Pesquisa;

import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import { Col , Card, Row, CardFooter,Text, Input, Button } from 'reactstrap'
import styles from '../styles/Home.module.css'
import logo from "../src/assets/logo5devs.png"
import { generate } from 'gerador-validador-cpf'
import { BsFiles } from "react-icons/bs";

export default function Home() {

const [cpf, setcpf]=useState('');


const gerarcpf = async() =>{
  await setcpf(generate({ format: true }));
  console.log(cpf)
}
function copiarTexto() {
  /* Selecionamos por ID o nosso input */
  var textoCopiado = document.getElementById("texto-usuario");

  /* Deixamos o texto selecionado (em azul) */
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); /* Para mobile */

  /* Copia o texto que está selecionado */
  document.execCommand("copy");

  alert("Texto copiado: " + textoCopiado.value);
}

  return (
   <Col style={{backgroundColor:'#bedfd4', width:'100vw', height: '100vh'}} >
   <Row style={{backgroundColor:'#bedfd4', width:'90vw', height: '12vh', display:'flex', alignItems:'center', marginLeft:'10vw'}} ><Image  width={200} height={50} alt='logo' src={logo}/></Row>
   <Row style={{display:'flex', backgroundColor:'#f5f5f5', width:'100vw', height: '78vh'}} >
    <Row style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#f4f4f4', width:'100vw'}}>
    <Card  style={{display:'flex',justifyContent:'center',alignItems:'center', width:'40vw'}} >
    <Input  id='texto-usuario' style={{backgroundColor:'#fff', width:'280px', height:'50px', fontSize:'20px',  paddingLeft:'10px' ,color:'black'}} placeholder='Gerador de CPF' value={cpf} ></Input>
    <BsFiles style={{ width:'30px', height:'30px', fontSize:'15px', color:'#000', borderColor:'#f5f5f5'}} onClick={copiarTexto} ></BsFiles>
    
    </Card>
    <Button style={{backgroundColor:'#336a7a', width:'200px', height:'50px', fontSize:'15px'}} onClick={gerarcpf} >GERAR CPF</Button>
    </Row>
   </Row>
   <Row style={{display:'flex'}}>
   <CardFooter 
    style={{backgroundColor:'#3c3c3c', width:'50vw', height: '10vh'}} >
   </CardFooter>
   <CardFooter 
    style={{backgroundColor:'#3c3c3c', width:'50vw', height: '10vh'}} >© VascoHindu
   </CardFooter>
   </Row>
   
   
  

   </Col>
    
  )
}

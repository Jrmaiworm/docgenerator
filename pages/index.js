import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import { Col , Card, Row, CardFooter,Text, Input, Button, Alert } from 'reactstrap'
import styles from '../styles/Home.module.css'
import logo from "../src/assets/logo5devs.png"
import { generate } from 'gerador-validador-cpf'
import { BsFiles } from "react-icons/bs";
import { generateCNPJ } from '@brazilian-utils/brazilian-utils'
import { formatCNPJ } from '@brazilian-utils/brazilian-utils'

export default function Home() {

const [cpf, setcpf]=useState('');
const [cnpj, setCnpj]=useState('');




const gerarcpf = async() =>{
  await setcpf(generate({ format: true }));
  console.log('cpf',cpf)
  
}
const gerarcnpj = async() =>{
  await setCnpj(generateCNPJ());
  console.log('cnpj',cnpj)
  
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
   <Card style={{ backgroundColor:'#f5f5f5', width:'10vw', height: '78vh', marginLeft:'130px',marginTop:'50px'}}>

    <Card style={{ backgroundColor:'#f5f5f5',width:'20vw',padding:'3px',fontFamily: "sans-serif",fontWeight: 700,fontSize:'15px',
    color: '#525252'}}>GERADORES</Card>
    <Button onClick={console.log("clicou")} style={{ backgroundColor:'#f5f5f5',width:'90%',padding:'3px',color:'#3c3c3c'}}>Gerador de CPF</Button>
    <Button  onClick={console.log("clicou")} style={{ backgroundColor:'#f5f5f5',width:'90%',padding:'3px',color:'#3c3c3c'}}>Gerador de CNPJ</Button>
   </Card>


   <Col  style={{marginTop:'50px', backgroundColor:'#f4f4f4', width:'65vw'}}>
    <Row style={{marginTop:'50px',display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#f4f4f4', width:'80vw'}}>
    <Card  style={{display:'flex',justifyContent:'center',alignItems:'center', width:'25vw'}} >
    <Input  id='texto-usuario' style={{backgroundColor:'#fff', width:'280px', height:'50px', fontSize:'20px',  paddingLeft:'10px' ,color:'black'}} placeholder='Gerador de CPF' value={cpf} ></Input>
    <BsFiles style={{ width:'30px', height:'30px', fontSize:'15px', color:'#3c3c3c', borderColor:'#f5f5f5'}} onClick={copiarTexto} ></BsFiles>
    </Card>
    <Button style={{backgroundColor:'#336a7a', width:'150px', height:'50px', fontSize:'15px'}} onClick={gerarcpf} >GERAR CPF</Button>
    </Row>
    <Row style={{marginTop:'50px',display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#f4f4f4', width:'80vw'}}>
    <Card  style={{display:'flex',justifyContent:'center',alignItems:'center', width:'25vw'}} >
    <Input  id='texto-usuario' style={{backgroundColor:'#fff', width:'280px', height:'50px', fontSize:'20px',  paddingLeft:'10px' ,color:'black'}} placeholder='Gerador de CNPJ' value={formatCNPJ(cnpj, { pad: true })} ></Input>
    <BsFiles style={{ width:'30px', height:'30px', fontSize:'15px', color:'#3c3c3c', borderColor:'#f5f5f5'}} onClick={copiarTexto} ></BsFiles>
    </Card>
    <Button style={{backgroundColor:'#336a7a', width:'150px', height:'50px', fontSize:'15px'}} onClick={gerarcnpj} >GERAR CNPJ</Button>
    </Row>
    </Col>
   </Row>
   <Row style={{display:'flex'}}>
   <CardFooter 
    style={{backgroundColor:'#3c3c3c', width:'50vw', height: '15vh'}} >
   </CardFooter>
   <CardFooter 
    style={{backgroundColor:'#3c3c3c', width:'50vw', height: '15vh'}} >© VascoHindu
   </CardFooter>
   </Row>
   {/* #0078a0 */}
   
  

   </Col>
    
  )
}

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  Col,
  Card,
  Row,
  CardFooter,
  Text,
  Input,
  Button,
  Alert,
} from "reactstrap";
import styles from "../styles/Home.module.css";
import logo from "../src/assets/logo5devs.png";
import { generate } from "gerador-validador-cpf";
import { BsFiles } from "react-icons/bs";
import { generateCNPJ } from "@brazilian-utils/brazilian-utils";
import { formatCNPJ } from "@brazilian-utils/brazilian-utils";
import { AiOutlineRight } from "react-icons/ai";
import { isValidCPF } from '@brazilian-utils/brazilian-utils';
import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';
import button from '../src/assets/button.png'
import Chatbot from "./marvi/marvi";
import { useEffect } from "react";
import axios from 'axios';

export default function Home() {

  const [data, setData] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get("https://cors-anywhere.herokuapp.com/http://177.70.102.109:3005/key");
      setData(response.data);
     
    } catch (error) {
      console.log("error");
    }
  }
  
  const [cpf, setcpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [gerador, setGerador] = useState(true);
  const [validador, setValidador] = useState(true);
  

  const gerarcpf = async () => {
    await setcpf(generate({ format: true }));
    console.log("cpf", cpf);
  };
  const gerarcnpj = async () => {
    await setCnpj(generateCNPJ());
    console.log("cnpj", cnpj);
  };
  const validadorCpf = async () => {
    isValidCPF(cpf); 
   return cpf;
  };
  const validadorCnpj = async () => {
    isValidCNPJ(cnpj); // false
    return cnpj
  };
  
  function copiarTexto() {
    /* Selecionamos por ID o nosso input */
    var textoCopiado = document.getElementById("texto-usuario");

    /* Deixamos o texto selecionado (em azul) */
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */

    /* Copia o texto que está selecionado */
    document.execCommand("copy");

    alert("Texto copiado: " + textoCopiado.value);
    setcpf("");
  }
  function copiarTexto2() {
    /* Selecionamos por ID o nosso input */
    var textoCopiado = document.getElementById("texto-usuario2");

    /* Deixamos o texto selecionado (em azul) */
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */

    /* Copia o texto que está selecionado */
    document.execCommand("copy");

    alert("Texto copiado: " + textoCopiado.value);
    setCnpj("");
  }

  function handleClick() {
    const confirmed = window.confirm('Atenção! \nClique em ok se você ama o Vasco!');
    if (confirmed) {
      window.location.href = 'https://jorge-rei-games-vasco.netlify.app/';
    }
  }

  return (
    <Col
      style={{ backgroundColor: "#bedfd4", width: "100vw", height: "100vh" }}
    >
      <Row
        style={{
          backgroundColor: "#bedfd4",
          width: "90vw",
          height: "12vh",
          display: "flex",
          alignItems: "center",
          marginLeft: "10vw",
          justifyContent:'space-around'
        }}
      >
        <Image width={200} height={50} alt="logo" src={logo} />
         {/* <a href="https://jorge-rei-games-vasco.netlify.app/" onclick="return confirm('Clique para ir para os jogos')" >
         <button style={{backgroundColor:'#bedfd4', color:'#000', borderRadius:'15px'}}>
  */}
   <button  style={{backgroundColor:'#bedfd4', color:'#000', borderRadius:'15px'}} onClick={handleClick}>Emulador online
        <Image  width={100} height={50} alt="logo" src={button} /></button>
      {/* Jogos online 
  </button>        </a> */}
      </Row>
      <Row> <Chatbot data={data}/></Row>
      
      <Row
        style={{
          display: "flex",
          backgroundColor: "#f5f5f5",
          width: "100vw",
          height: "78vh",
        }}
      >
        <Card
          style={{
            backgroundColor: "#f5f5f5",
            width: "15vw",
            height: "78vh",
            marginLeft: "130px",
            marginTop: "50px",
          }}
        >
          <Card
            style={{
              backgroundColor: "#f5f5f5",
              width: "30vw",
              padding: "3px",
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#525252",
              marginBottom:'10px'
            }}
          >
            GERADORES
          </Card>
          <Button
            onClick={()=>setGerador(true)}
            style={{
              display:'flex',
              backgroundColor: "#f5f5f5",
              width: "90%",
              padding: "3px",
              color: "#3c3c3c",
              justifyContent:'space-around'
            }}
          >
            Gerador de CPF<AiOutlineRight/>
          </Button>
          <Button
           onClick={()=>setGerador(false)}
           style={{
            display:'flex',
            backgroundColor: "#f5f5f5",
            width: "90%",
            padding: "3px",
            color: "#3c3c3c",
            justifyContent:'space-around'
          }}
          >
            Gerador de CNPJ<AiOutlineRight/>
          </Button>
          <Button
           onClick={()=>setValidador(true)}
           style={{
            display:'flex',
            backgroundColor: "#f5f5f5",
            width: "90%",
            padding: "3px",
            color: "#3c3c3c",
            justifyContent:'space-around'
          }}
          >
            Validador de CPF<AiOutlineRight/>
          </Button>
            <Button
           onClick={()=>setValidador(false)}
           style={{
            display:'flex',
            backgroundColor: "#f5f5f5",
            width: "90%",
            padding: "3px",
            color: "#3c3c3c",
            justifyContent:'space-around'
          }}
          >
            Validador de CNPJ<AiOutlineRight/>
          </Button>
        </Card>

        <Col
          style={{
            marginTop: "50px",
            backgroundColor: "#f4f4f4",
            width: "65vw",
          }}
        >
          { gerador ?(
            <Row
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f4f4f4",
                maxWidth: "70vw",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "25vw",
                }}
              >
                <Input
                  id="texto-usuario"
                  style={{
                    backgroundColor: "#fff",
                    maxWidth: "280px",
                    height: "50px",
                    fontSize: "20px",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                  placeholder="Gerador de CPF"
                  value={cpf}
                ></Input>
                <BsFiles
                  style={{
                    maxWidth: "30px",
                    height: "30px",
                    fontSize: "15px",
                    color: "#3c3c3c",
                    borderColor: "#f5f5f5",
                  }}
                  onClick={copiarTexto}
                ></BsFiles>
              </Card>
              <Button
                style={{
                  backgroundColor: "#336a7a",
                  maxWidth: "150px",
                  height: "50px",
                  fontSize: "15px",
                }}
                onClick={gerarcpf}
              >
                GERAR CPF
              </Button>
            </Row>
          ) : (
            <Row
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f4f4f4",
                maxWidth: "70vw",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "25vw",
                }}
              >
                <Input
                  id="texto-usuario2"
                  style={{
                    backgroundColor: "#fff",
                    maxWidth: "280px",
                    height: "50px",
                    fontSize: "20px",
                    paddingLeft: "10px",
                    color: "black",
                  }}
                  placeholder="Gerador de CNPJ"
                  value={!!cnpj ? formatCNPJ(cnpj, { pad: true }) : null}
                ></Input>
                <BsFiles
                  style={{
                    maxWidth: "30px",
                    height: "30px",
                    fontSize: "15px",
                    color: "#3c3c3c",
                    borderColor: "#f5f5f5",
                  }}
                  onClick={copiarTexto2}
                ></BsFiles>
              </Card>
              <Button
                style={{
                  backgroundColor: "#336a7a",
                  maxWidth: "150px",
                  height: "50px",
                  fontSize: "15px",
                }}
                onClick={gerarcnpj}
              >
                GERAR CNPJ
              </Button>
            </Row>
          )}


        </Col>
      </Row>
      <Row style={{ display: "flex" }}>
        <CardFooter
          style={{ backgroundColor: "#3c3c3c", width: "50vw", height: "15vh" }}
        ></CardFooter>
        <CardFooter
          style={{ backgroundColor: "#3c3c3c", width: "50vw", height: "15vh" }}
        >
          © VascoHindu
        </CardFooter>
      </Row>
      {/* #0078a0 */}
    </Col>
  );
}

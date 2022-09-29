import Head from 'next/head'
import Image from 'next/image'
import { Col , Card, Row, CardFooter,Text } from 'reactstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <Col style={{backgroundColor:'#bedfd4', width:'100vw', height: '100vh'}} >
   <Row style={{backgroundColor:'#bedfd4', width:'100vw', height: '8vh'}} ></Row>
   <Row style={{display:'flex', backgroundColor:'#f5f5f5', width:'100vw', height: '82vh'}} >
 
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

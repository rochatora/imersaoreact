import React, { useState } from 'react'
import { Container, Form, FormGroup, Button, Jumbotron, Label, Input, Alert } from 'reactstrap';

import Head from 'next/head'
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';



function Orcamento() {
  const [orcamento, setOrcamento] = useState({
    name: '',
    email: '',
    phone: '',
    whatsApp: '',
    projeto: ''
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  const onChangeInput = e => setOrcamento({ ...orcamento, [e.target.name]: e.target.value });

  const sendOrcamento = async e => {
    e.preventDefault();
    console.log(orcamento);

    setResponse({ formSave: true })

    try {
      const res = await fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        headers: { 'Content-Type': 'application/json' }
      });

      const responseEnv = await res.json();

      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        })
      } else {
        setResponse({
          formSave: false,
          type: 'success',
          message: responseEnv.message
        })
      }
    } catch (err) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Erro: Orcamento nao enviado!'
      })
    }
  }

  return (
    <div>
      <Head>
        <title>Orçamento</title>
        <meta name='description' content='Solicitar orçamento para ...' />
      </Head>
      <Menu />

      <Jumbotron fluid className='descr-top'>
        <style>
          {
            `.rodape{
                        background-color: #050D3D;
                        color: #00a1fc;
                        padding-top: 40px;
                        padding-bottom:40px;
                        margin-bottom: 0 !important
                    }`
          }
        </style>
        <Container className='text-center'>
          <h1 className='display-4'>Orçamento</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className='form-orcamento'>
        <style>
          {
            `.form-orcamento{
            padding-top: 80px;
            padding-buttom: 80px;
            background-color: #fff;
            margin-bottom: 0 !important;

          }`
          }
        </style>
        <Container>

          {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
          {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}

          <Form onSubmit={sendOrcamento}>
            <FormGroup>
              <Label for='name'>Nome</Label>
              <Input type='text' name='name' id='name' placeholder='Digite seu nome ...' onChange={onChangeInput} />
            </FormGroup>
            <FormGroup>
              <Label for='email'>E-mail</Label>
              <Input type='email' name='email' id='email' placeholder='Digite seu e-mail ...' onChange={onChangeInput} />
            </FormGroup>
            <FormGroup>
              <Label for='phone'>Telefone</Label>
              <Input type='phone' name='phone' id='phone' placeholder='(xx) xxxxx-xxxx ...' onChange={onChangeInput} />
            </FormGroup>
            <FormGroup>
              <Label for='whatsapp'>WhatsApp</Label>
              <Input type='text' name='whatsApp' id='whatsApp' placeholder='Digite seu whatsApp ...' onChange={onChangeInput} />
            </FormGroup>
            <FormGroup>
              <Label for='projeto'>Projeto</Label>
              <Input type='textarea' name='projeto' id='projeto' placeholder='Digite seu projeto ...' onChange={onChangeInput} />
            </FormGroup>

            {response.formSave ? <Button type='submit' outline color='danger' disabled>Enviando...</Button> : <Button type='submit' outline color='primary'>Solicitar</Button>}
          </Form>
        </Container>
      </Jumbotron>

      <Rodape />

    </div>

  );
}

export default Orcamento
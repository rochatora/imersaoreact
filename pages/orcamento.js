import React from 'react'
import { Container, Form, FormGroup, Button,Jumbotron, Label, Input } from 'reactstrap';

import Head from 'next/head'
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';



function Orcamento() {
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
          <Form>
            <FormGroup>
              <Label for='name'>Nome</Label>
              <Input type='text' name='name' id='name' placeholder='Digite seu nome ...' />
            </FormGroup>
            <FormGroup>
              <Label for='email'>E-mail</Label>
              <Input type='email' id='email' placeholder='Digite seu e-mail ...' />
            </FormGroup>
            <FormGroup>
              <Label for='phone'>Telefone</Label>
              <Input type='phone' id='phone' placeholder='(xx) xxxxx-xxxx ...' />
            </FormGroup>
            <FormGroup>
              <Label for='whatsapp'>WhatsApp</Label>
              <Input type='text' id='whatsapp' placeholder='Digite seu whatsApp ...' />
            </FormGroup>
            <FormGroup>
              <Label for='projeto'>Projeto</Label>
              <Input type='textarea' id='projeto' placeholder='Digite seu projeto ...' />
            </FormGroup>

            <Button type='submit' outline color='primary'>Solicitar</Button>
          </Form>
        </Container>
      </Jumbotron>

      <Rodape />

    </div>

  );
}

export default Orcamento
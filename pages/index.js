import React from 'react';

import Head from 'next/head';
import Menu from '../components/Menu'
import Rodape from '../components/Rodape'

import { Jumbotron, Container } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Home() { 
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='description' content='Site de ... sobre ...' />
      </Head>
      <Menu />
      <Jumbotron fluid className='descr-top'>
        <style>
          {
            `.descr-top{
              background-color: #050c3d;
              color: #00a1fc;
              margin-bottom: 0 !important;
            }`
          }
        </style>
        <Container className="text-center">
          <h1 className="display-4">Temos a solução que a sua empresa precisa</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a href='/orcamento' className='btn btn-outline-primary btn-lg mt-4'>Orçamento</a>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className='servicos'>
        <style>
          {
            `.servicos {
              background-color: #fff;
              margin-bottom: 0 !important;
            }.circulo{
              width:140px;
              height: 140px;
              background-color: #0A197D;
              font-size: 3rem;
              color: #fff;
              padding-top: 25px;
            }.centralizar{
              margin: 0 auto !important;
              float:none !important;
            }`
          }
        </style>
        <Container className='text-center'>
          <div>
            <h2 className='display-4'>Serviços</h2>
            <p className='lead pb-4'>Nullam ac enim et nisl interdum tempor ac non nulla.</p>
          </div>
          <div className='row'>

            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon="laptop-code" />
              </div>
              <h2 className='mt-4 mb-4'>Serviço um</h2>
              <p>Nullam ac enim et nisl interdum tempor ac non nulla.</p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon="mobile-alt" />
              </div>
              <h2 className='mt-4 mb-4'>Serviço dois</h2>
              <p>Nullam ac enim et nisl interdum tempor ac non nulla.</p>
            </div>
            <div className='col-md-4'>
              <div className='rounded-circle circulo centralizar'>
                <FontAwesomeIcon icon="network-wired" />
              </div>
              <h2 className='mt-4 mb-4'>Serviço tres</h2>
              <p>Nullam ac enim et nisl interdum tempor ac non nulla.</p>
            </div>

          </div>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  )
}

export default Home
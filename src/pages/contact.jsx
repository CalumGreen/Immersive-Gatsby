import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Contact = center => (
  <Layout>
    <Helmet title={'About Immersive Explorers'} />
    <Header title="About Immersive Explorers"></Header>
    <Container center={center}>
      <h3>
        Contact us Immersive Explorers Page{' '}
        <a href="https://justinformentin.com/gatsby-v2-guide">here.</a>
      </h3>
    </Container>
  </Layout>
);

export default Contact;

Contact.propTypes = {
  center: PropTypes.object,
};

import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
const style = {
  width: 20,
  height: 20,
  opacity: 1,
  margin: 8,
  borderRadius: 0,
  display: 'inline-block',
  background: '#c81c60',
};

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
};

const Container = styled.div`
  background: ${({ theme }) => theme.white};
`;

export default function Loader(props) {
  return (
    <Container>
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeat: 'Infinity',
          repeatType: 'reverse',
          ease: 'anticipate',
          duration: 1,
          delay: 0,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeat: 'Infinity',
          repeatType: 'reverse',
          ease: 'anticipate',
          duration: 1,
          delay: 0.2,
        }}
      />
      <motion.div
        style={style}
        variants={variants}
        initial={'start'}
        animate={'end'}
        transition={{
          repeat: 'Infinity',
          repeatType: 'reverse',
          ease: 'anticipate',
          duration: 1,
          delay: 0.4,
        }}
      />
    </Container>
  );
}

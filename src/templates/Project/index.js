import React from 'react';
import Layout from '../../components/Layout';
import { ProjectContainer, Row } from './style';
import MacosImg from './macos.png';
import IphoneImg from './iphone.png';
import MockImg from './mock.png';

import { VscDebugBreakpointLog } from 'react-icons/vsc';

const DiamondIcon = <VscDebugBreakpointLog />;

const Project = ({ data, pageContext }) => {
  const { stack, name, title, intro, why, learnt } = pageContext.data;
  return (
    <Layout>
      <ProjectContainer>
        <Row>
          <h5>{name}</h5>
          <h1>{title}</h1>
          <p>{intro}</p>
          <img src={MacosImg} />
        </Row>

        <Row>
          <h3>How is made it?</h3>
          <ul>
            {stack.map(item => (
              <li>
                {DiamondIcon} {item}
              </li>
            ))}
          </ul>
        </Row>

        {why.length > 0 && (
          <Row>
            <h3>Why I built it?</h3>
            <p>{why}</p>
            <img src={IphoneImg} />
          </Row>
        )}

        {learnt.length > 0 && (
          <Row>
            <h3>What I've learned?</h3>
            <p>{learnt}</p>
            <img src={MockImg} style={{ background: '#eeeeee' }} />
          </Row>
        )}
      </ProjectContainer>
    </Layout>
  );
};

export default Project;

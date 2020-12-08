import React from 'react';
import Layout from '../../components/Layout';
import { ProjectContainer, Row } from './style';
import MacosImg from './macos.png';
import IphoneImg from './iphone.png';
import MockImg from './mock.png';

import { VscDebugBreakpointLog } from 'react-icons/vsc';

const DiamondIcon = <VscDebugBreakpointLog />;

const Project = ({ data, pageContext }) => {
  return (
    <Layout>
      <ProjectContainer>
        <Row>
          <h5>{pageContext.data.name}</h5>
          <h1>{pageContext.data.title}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <img src={MacosImg} />
        </Row>
        <Row>
          <h3>How is made it?</h3>
          <ul>
            {pageContext.data.stack.map(item => (
              <li>
                {DiamondIcon} {item}
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <h3>Why I built it?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img src={IphoneImg} />
        </Row>
        <Row>
          <h3>What I've learned?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <img src={MockImg} style={{ background: '#eeeeee' }} />
        </Row>
      </ProjectContainer>
    </Layout>
  );
};

export default Project;

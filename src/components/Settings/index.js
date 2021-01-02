import React, { useState } from 'react';
import { Container, UlWrapper, Item } from './style';
import { VscSettings } from 'react-icons/vsc';
import { BiSun, BiMoon, BiBitcoin } from 'react-icons/bi';
import { IoVolumeMediumOutline, IoVolumeOffOutline } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import useSound from 'use-sound';
import light from './light-turn-on.wav';

const Settings = ({ theme, themeToggler }) => {
  const [play] = useSound(light);
  const [toggleItems, setToggleItems] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [toggleSound, setToggleSound] = useState(true);

  return (
    <Container>
      <UlWrapper isVisible={toggleItems}>
        {/* <Item onClick={() => setToggleSound(!toggleSound)}>
          {(toggleSound && <IoVolumeMediumOutline />) || <IoVolumeOffOutline />}
        </Item> */}
        <Item
          onClick={() => {
            play();
            setTimeout(() => {
              setIsDark(!isDark);
              themeToggler();
              setToggleItems(false);
            }, 200);
          }}
        >
          {(isDark && <BiMoon />) || <BiSun />}
        </Item>
        {/* <Item onClick={() => setIsDark(!isDark)}>
          {(isDark && <BiBitcoin />) || <FaReact />}
        </Item> */}
      </UlWrapper>

      <button onClick={() => setToggleItems(!toggleItems)}>
        <VscSettings />
      </button>
    </Container>
  );
};

export default Settings;

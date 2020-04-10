import styled, { keyframes } from 'styled-components'

/* export const SkillsContainer = styled.section`
  padding: 4rem 0.5rem; 
  background-color: #F2F3F5;

  ul {
    display: flex;
    overflow-x: auto; 
    flex-wrap: nowrap;
    align-items: center;

    li {
      list-style-type: none;
      margin: 0 1rem;
      flex: 0 0 auto;
      font-size: 1.4rem;
      text-align: center;
      font-weight: 300;
    }
  }
` */

const Scrolling = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * calc(80px / 3) * 3)); }
`

export const SkillsContainer = styled.section`

  

.marquee {
  width: 100%;
  height: 20vh;
  background-color: #111;
  color: #eee;
  overflow: hidden;
  position: relative;
}
.marquee:before, .marquee:after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: "";
  z-index: 1;
}
.marquee:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}
.marquee:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}
.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}
/* .marquee-content:hover {
  animation-play-state: paused;
} */
@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height)*3/4); /* 5rem; */
  white-space: nowrap;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */
  border: 2px solid #eee;
}

@media (max-width: 600px) {
  html { font-size: 12px; }
  :root {
    --marquee-width: 100vw;
    --marquee-height: 16vh;
    --marquee-elements-displayed: 3;
  }
  .marquee:before, .marquee:after { width: 5rem; }
}
`
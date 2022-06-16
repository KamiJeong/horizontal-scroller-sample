import styled from 'styled-components';

import sample1 from './sample1.jpeg';
import sample2 from './sample2.jpeg';
import sample3 from './sample3.jpg';
import sample4 from './sample4.jpg';


const Styled = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;

  .item {
    position: relative;

    flex: 1;

    box-sizing: border-box;
    padding: 76px;
    width: 100vw;
    height: auto;

    .img-cover {
      position: absolute;
      top: 0;
      right: 0;
      
      width: 60%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Sample = () => (
  <Styled>
    <div className="item">
      <div className="img-cover">
        <img src={sample1} alt="sample1"/>
      </div>
    </div>
    <div className="item">
      <div className="img-cover">
        <img src={sample2} alt="sample2"/>
      </div>
    </div>
    <div className="item">
      <div className="img-cover">
        <img src={sample3} alt="sample3"/>
      </div>
    </div>
    <div className="item">
      <div className="img-cover">
        <img src={sample4} alt="sample4"/>
      </div>
    </div>
  </Styled>
);

export default Sample;
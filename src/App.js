import HorizontalScroller from "./components/HorizontalScroller";
import Sample from './components/Sample';
import {useCallback, useState} from "react";

function App() {
  const [type, setType] = useState(0);

  const updateContentsType = useCallback((value) => {
    console.log(value);
    setType(value >= 50 ? 1 : 0);
  }, []);

  return (
    <>
      <section>Section 1</section>
      <section style={{position: 'relative'}}>
        <div style={{position: 'sticky', top: 20, left: 20, zIndex: 1}}>
          {type === 0 ? 'Title1' : 'Title2'}
        </div>
        <HorizontalScroller getPercent={updateContentsType}>
          <Sample/>
        </HorizontalScroller>
      </section>
      <section>Section 3</section>
      <section>Section 4</section>
      <section>Section 5</section>
    </>
  );
}

export default App;
import {memo, useEffect, useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const styleSheet =  {
  holder: {
    position: 'relative',
    width: '100%',
  },
  sticky: {
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
  },
  contents: {
    position: 'absolute',
    height: '100%',
  },
};


const HorizontalScroller = ({ children, getPercent }) => {
  const holderRef = useRef();
  const stickyRef = useRef();
  const contentsRef = useRef();

  const [translated, setTranslated] = useState(0);

  // scroll Event
  useLayoutEffect(() => {
    const calcHeight = (ref) => {
      const {innerWidth: width, innerHeight: height} = window;
      const {scrollWidth} = ref;
      return scrollWidth - width + height;
    };

    const resizeCallback = () => {
      const holderTarget = holderRef.current;
      const contentsTarget = contentsRef.current;
      holderTarget.style.height = `${calcHeight(contentsTarget)}px`;
    }

    const translateCallback = () => {
      const stickyTarget = stickyRef.current;
      const contentsTarget = contentsRef.current;
      const { offsetTop } = stickyTarget;
      const { offsetWidth } = contentsTarget;

      contentsTarget.style.transform = `translateX(-${offsetTop}px)`;

      setTranslated(offsetTop / offsetWidth * 100);
    }
    resizeCallback();
    window.addEventListener('resize', resizeCallback);
    window.addEventListener('scroll', translateCallback);

    return () => {
      window.removeEventListener('scroll', translateCallback);
      window.removeEventListener('resize', resizeCallback);
    }
  }, []);

  useEffect(() => {
    getPercent(translated);
  }, [translated, getPercent]);

  return (
    <div ref={holderRef} style={styleSheet.holder}>
      <div ref={stickyRef} style={styleSheet.sticky}>
        <div ref={contentsRef} style={styleSheet.contents}>
          {children}
        </div>
      </div>
    </div>
  )
};

HorizontalScroller.propTypes = {
  children: PropTypes.element,
  getPercent: PropTypes.func,
};

export default memo(HorizontalScroller);
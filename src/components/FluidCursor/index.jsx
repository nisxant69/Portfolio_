import { useEffect } from 'react';
import useFluidCursor from '../../hooks/use-FluidCursor';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const FluidCursor = () => {
    useEffect(() => {
        useFluidCursor();
    }, []);

    return (
        <CanvasContainer>
            <canvas id="fluid" />
        </CanvasContainer>
    );
};

export default FluidCursor;

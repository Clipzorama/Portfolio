import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Robot({modelPath, ...props}) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  // this is how i am accessing the animations inside of the glb file
  const { actions } = useAnimations(animations, group);


  useEffect(() => {
    if (!actions) return;

    actions['Wave'].reset().fadeIn(0.3).play();
    actions['Wave'].clampWhenFinished = true;
    actions['Wave'].setLoop(THREE.LoopOnce); // play once

    // Set up interval to wave every 15 seconds
    const waveInterval = setInterval(() => {
      if (actions['Wave']) {
        actions['Wave'].reset().fadeIn(0.3).play();
        actions['Wave'].clampWhenFinished = true;
        actions['Wave'].setLoop(THREE.LoopOnce); 
      }
    }, 10000); // every 10 seconds

    return () => clearInterval(waveInterval); // cleanup on unmount


  }, [actions]);


  return <primitive ref={group} object={scene} {...props} />;
}

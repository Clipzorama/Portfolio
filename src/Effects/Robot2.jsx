import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export function Robot2({modelPath, ...props}) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);


  useEffect(() => {
    if (!actions) return;

    actions['Yes'].reset().fadeIn(0.3).play();
    actions['Yes'].clampWhenFinished = true;
    actions['Yes'].setLoop(THREE.LoopOnce); // play once

    // Set up interval to wave every 15 seconds
    const waveInterval = setInterval(() => {
      if (actions['Yes']) {
        actions['Yes'].reset().fadeIn(0.3).play();
        actions['Yes'].clampWhenFinished = true;
        actions['Yes'].setLoop(THREE.LoopOnce);
      }
    }, 5000); // every 10 seconds

    return () => clearInterval(waveInterval); 


  }, [actions]);


  return <primitive ref={group} object={scene} {...props} />;
}

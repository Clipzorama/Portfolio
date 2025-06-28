import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export function Robot(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/RobotExpressive.glb');
  // this is how i am accessing the animations inside of the glb file
  const { actions } = useAnimations(animations, group);


  // Here im going to add the wave animation once the component is mounted
  useEffect(() => {
    // Play idle animation
    if (actions && actions['Idle']) {
      actions['Wave'].reset().fadeIn(0.5).play();
    }
    
  }, [actions, scene]);


  return <primitive ref={group} object={scene} {...props} />;
}

import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export function Robot({modelPath, ...props}) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  // this is how i am accessing the animations inside of the glb file
  const { actions } = useAnimations(animations, group);


  // Here im going to add the wave animation once the component is mounted
  useEffect(() => {
    
    actions['Wave'].fadeIn(0.5).play();


  }, [actions, scene]);


  return <primitive ref={group} object={scene} {...props} />;
}

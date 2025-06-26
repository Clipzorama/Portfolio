import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export function Robot(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/RobotExpressive.glb');
  const { actions } = useAnimations(animations, group);


  // Here im going to add the wave animation once the component is mounted
  useEffect(() => {
    // Play idle animation
    if (actions && actions['Idle']) {
      actions['Idle'].reset().fadeIn(0.5).play();
    }

    // Update mesh colors
    scene.traverse((child) => {
      if (child.isMesh) {
        switch (child.name) {
          case "Head_primitive2": // 👁 Eyes
            child.material.color.set("#00ffff"); // cyan
            break;
          
        }
      }
    });
  }, [actions, scene]);


  return <primitive ref={group} object={scene} {...props} />;
}

import { useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';

export function Robot(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('@/models/RobotExpressive.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions['Idle']) {
      actions['Idle'].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} {...props} />;
}

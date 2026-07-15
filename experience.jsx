import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const cameraPath = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 8),
  new THREE.Vector3(3, 1, 6),
  new THREE.Vector3(-3, 0.5, 5),
  new THREE.Vector3(1, -1, 4),
]);

function MainObject({ progress }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;

    const scale = 1 + Math.sin(progress.current * Math.PI * 3) * 0.12;
    group.current.scale.setScalar(scale);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.35, 4]} />
          <MeshDistortMaterial
            color="#8066ff"
            roughness={0.15}
            metalness={0.65}
            distort={0.35}
            speed={2}
          />
        </mesh>

        <mesh scale={1.45}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial
            color="#8be9fd"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Experience({ progress }) {
  useFrame(({ camera }) => {
    const point = cameraPath.getPoint(
      THREE.MathUtils.clamp(progress.current, 0, 1)
    );

    camera.position.lerp(point, 0.06);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#070711"]} />
      <fog attach="fog" args={["#070711", 7, 16]} />

      <ambientLight intensity={0.8} />
      <directionalLight position={[4][5][6]} intensity={3} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={15} color="#6747ff" />

      <MainObject progress={progress} />

      <Sparkles
        count={100}
        scale={[10][7][10]}
        size={2}
        speed={0.25}
        color="#b9b1ff"
      />
    </>
  );
}

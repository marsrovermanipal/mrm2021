import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Curiosity_static.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.06, 0.25, 1.1]}>
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={materials.wheels}
        />
        <mesh
          geometry={nodes.Cylinder015_1.geometry}
          material={materials.tex_02}
        />
        <mesh
          geometry={nodes.Cylinder015_2.geometry}
          material={materials.tex_01}
        />
        <mesh
          geometry={nodes.Cylinder015_3.geometry}
          material={materials.parts_AO}
        />
        <mesh
          geometry={nodes.Cylinder015_4.geometry}
          material={materials.tex_03}
        />
        <mesh
          geometry={nodes.Cylinder015_5.geometry}
          material={materials.tex_05}
        />
        <mesh
          geometry={nodes.Cylinder015_6.geometry}
          material={materials.tex_04}
        />
        <mesh
          geometry={nodes.Cylinder015_7.geometry}
          material={materials.tex_03a}
        />
        <mesh
          geometry={nodes.Cylinder015_8.geometry}
          material={materials.internals}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Curiosity_static.glb");

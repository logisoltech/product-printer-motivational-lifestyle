"use client";

import { Suspense, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";

const MODEL_URL = "/redo-optimized-compressed.glb";

/** Slightly stronger env reflections without rewriting roughness/metalness (avoids “striped” shading). */
function boostEnvMaterials(root) {
  root.traverse((obj) => {
    if (!obj.isMesh) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of mats) {
      if (!m || typeof m !== "object") continue;
      if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
        m.envMapIntensity = Math.max(m.envMapIntensity ?? 1, 1.25);
        m.needsUpdate = true;
      }
    }
  });
}

/**
 * Many CAD exports duplicate nearly-coplanar shells → classic z-fighting (jagged black/white).
 * Small staggered polygon offsets break depth ties without changing materials much.
 */
function staggerPolygonOffset(root) {
  let i = 0;
  root.traverse((obj) => {
    if (!obj.isMesh) return;
    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const m of mats) {
      if (!m || typeof m !== "object") continue;
      if ("polygonOffset" in m) {
        m.polygonOffset = true;
        m.polygonOffsetFactor = (i % 14) * 0.12;
        m.polygonOffsetUnits = 1;
        m.needsUpdate = true;
      }
      i += 1;
    }
  });
}

function Model() {
  const { scene } = useGLTF(MODEL_URL);

  const root = useMemo(() => {
    const r = scene.clone(true);
    r.updateMatrixWorld(true);
    boostEnvMaterials(r);
    staggerPolygonOffset(r);
    return r;
  }, [scene]);

  return (
    <Bounds fit clip observe margin={1.35}>
      <Center>
        <primitive object={root} />
      </Center>
    </Bounds>
  );
}

useGLTF.preload(MODEL_URL);

export default function View360Canvas() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0.25, 5], fov: 40, near: 0.05, far: 200 }}
        gl={{
          antialias: true,
          alpha: false,
          logarithmicDepthBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.08,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        className="h-full w-full touch-none"
      >
        <color attach="background" args={["#171717"]} />

        <hemisphereLight args={["#f8fafc", "#64748b", 0.85]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 10, 6]} intensity={0.62} />
        <directionalLight position={[-4, 6, -4]} intensity={0.34} />
        <pointLight position={[0, 2.5, 7]} intensity={0.38} distance={24} decay={2} />

        <Suspense fallback={null}>
          <Environment preset="apartment" environmentIntensity={1.25} />
          <Model />
          <OrbitControls
            makeDefault
            enablePan
            enableZoom
            autoRotate
            autoRotateSpeed={0.65}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

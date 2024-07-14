import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const BackgroundScene = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.035);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.autoClear = false; // Allows multiple renderers to be used on the same page

    const canvas = renderer.domElement;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; // Ensure canvas is behind all other content
    document.body.appendChild(canvas);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.1);
    bloomPass.threshold = 0;
    bloomPass.strength = 2.5;
    bloomPass.radius = 0;
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const edges = new THREE.EdgesGeometry(geo);
    function getBox() {
      const box = new THREE.LineSegments(edges, mat);
      return box;
    }
    const boxGroup = new THREE.Group();
    boxGroup.userData.update = (timeStamp) => {
      boxGroup.rotation.x = timeStamp * 0.0001;
      boxGroup.rotation.y = timeStamp * 0.0001;
    };
    scene.add(boxGroup);

    function getRandomSpherePoint({ radius = 10 }) {
      const minRadius = radius * 0.25;
      const maxRadius = radius - minRadius;
      const range = Math.random() * maxRadius + minRadius;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      return {
        x: range * Math.sin(phi) * Math.cos(theta),
        y: range * Math.sin(phi) * Math.sin(theta),
        z: range * Math.cos(phi),
      };
    }

    const numBoxes = 1000;
    const radius = 45;
    for (let i = 0; i < numBoxes; i++) {
      const box = getBox();
      const { x, y, z } = getRandomSpherePoint({ radius });
      box.position.set(x, y, z);
      box.rotation.set(x, y, z);
      boxGroup.add(box);
    }

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    scene.add(hemiLight);

    const animate = (timeStamp = 0) => {
      requestAnimationFrame(animate);
      boxGroup.userData.update(timeStamp);
      composer.render(scene, camera);
      controls.update();
    };

    animate();

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      document.body.removeChild(canvas);
      composer.dispose();
    };
  }, []);

  return null; // No need for any JSX since everything is rendered via Three.js
};

export default BackgroundScene;

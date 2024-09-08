import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sounds from "../media/sounds/*.mp3";
import glbs from "../media/3d/*.glb";

let models = {};

export let glbSrc = glbs;

export const preload = async () => {
  models.hotdog = await loadMesh(glbs.hotdog);
  models.duck = await loadMesh(glbs.duck);
  models.paddle = await loadMesh(glbs.paddle);
  models.hammer = await loadMesh(glbs.hammer);
  models.moka = await loadMesh(glbs.moka);
  models.broccoli = await loadMesh(glbs.broccoli);
  models.laser = await loadMesh(glbs.laser);
  models.linear = await loadMesh(glbs.linear);
};

export let loadMesh = async (url) => {
  const gltf = await modelLoader(url);
  return gltf.scene.children[0];
};

const loader = new GLTFLoader();

// this utility function allows you to use any three.js
// loader with promises and async/await
const modelLoader = (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (data) => resolve(data), null, reject);
  });
};

export const spawn = (thing) => {
  let obj = {};

  //linear
  if (thing === "linear") {
    let linear = models.linear.clone();
    // hotdog.rotation.set(0, Math.random() * 10, 0);
    linear.scale.set(0.1, 0.1, 0.1);
    obj.mesh = linear;
    obj.sound = sounds.squelch;
    obj.mass = 2;
    // obj.rDamp = 0.01 + Math.random() * 0.03;
  }

  //diamond
  if (thing === "hotdog") {
    let hotdog = models.hotdog.clone();
    // hotdog.rotation.set(0, Math.random() * 10, 0);
    hotdog.scale.set(0.04, 0.04, 0.04);
    obj.mesh = hotdog;
    obj.sound = sounds.squelch;
    obj.mass = 2;
    // obj.rDamp = 0.01 + Math.random() * 0.03;
  }

  if (thing === "pong") {
    let paddle = models.paddle.clone();
    // paddle.rotation.set(0, Math.random() * 10, 0);
    obj.mesh = paddle;
    // obj.rDamp = 0.01 + Math.random() * 0.01;
    
    obj.sound = sounds.pong;
    obj.mass = 1;
  }

  //This is the UP NISMED logo
  if (thing === "duck") {
    let duck = models.duck.clone();
    duck.rotation.set(0, Math.random() * 10, 0);
    duck.scale.set(0.1, 0.1, 0.1);
    obj.mesh = duck;
    obj.sound = sounds.quack;
    obj.mass = 3;
    obj.rDamp = 0.01 + Math.random() * 0.03;
  }

  if (thing === "moka") {
    let moka = models.moka.clone();
    moka.rotation.set(0, Math.random() * 10, 0);
    moka.scale.set(0.05, 0.05, 0.05);
    obj.mesh = moka;
    obj.sound = sounds.bling;
    obj.mass = 3;
    obj.rDamp = 0.01 + Math.random() * 0.02;
  }
  //graphene
  if (thing === "hammer") {
    let hammer = models.hammer.clone();
    // hammer.rotation.set(0, Math.random() * 10, 0);
    hammer.scale.set(0.035, 0.035, 0.035);
    obj.mesh = hammer;
    obj.sound = sounds.kick;
    obj.mass = 3;
    // obj.rDamp = 0.01 + Math.random() * 0.02;
  }

  //This is the carbon nanotube
  if (thing === "broccoli") {
    let broccoli = models.broccoli.clone();
    //broccoli.rotation.set(0, Math.random() * 10, 0);
    broccoli.scale.set(0.03, 0.03, 0.03);
    obj.mesh = broccoli;
    obj.mass = 3;
    //obj.rDamp = 0.01 + Math.random() * 0.03;
  }

  //buckyball
  if (thing === "laser") {
    let laser = models.laser.clone();
    // laser.rotation.set(0, Math.random() * 10, 0);
    laser.scale.set(0.04, 0.04, 0.04);
    obj.mesh = laser;
    // obj.sound = sounds.laser;
    obj.mass = 3;
    // obj.rDamp = 0.01 + Math.random() * 0.03;
  }

  return obj;
};

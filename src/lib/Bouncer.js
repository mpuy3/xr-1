/*
    Bouncer class    
*/

import * as THREE from "three";
import { Howl, Howler } from "howler";
import { spawn } from "./spawner.js";

export class Bouncer {
  constructor(pos, height, thing) {
    const obj = spawn(thing);

    this.mesh = obj.mesh;
    this.mass = obj.mass;
    this.sound = new Howl({
      src: [obj.sound],
    });

    this.mesh.castShadow = true;
    this.mesh.position.copy(pos);

    this.mesh.position.y = height;
    this.bottom = pos.y;
    this.hasPlayed = true;

    // position
    this.vel = new THREE.Vector3();
    this.acc = new THREE.Vector3();

  }
}

require('aframe');
require('super-hands');
require('aframe-teleport-controls');
require('aframe-physics-components');
var extras = require('aframe-extras');

// Register a single component.
AFRAME.registerComponent('checkpoint', extras.misc.checkpoint);

// Register a particular package, and its dependencies.
extras.controls.registerAll();

// Register everything.
extras.registerAll();

var el = sceneEl.querySelector('#susanne');
el.body.applyImpulse(
  /* impulse */        new CANNON.Vec3(0, 1, -1),
  /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))
);

var playerEl = document.querySelector('[camera]');
playerEl.addEventListener('collide', function (e) {
console.log('Player has collided with body #' + e.detail.body.id);

e.detail.target.el;  // Original entity (playerEl).
e.detail.body.el;    // Other entity, which playerEl touched.
e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});


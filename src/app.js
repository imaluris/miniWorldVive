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
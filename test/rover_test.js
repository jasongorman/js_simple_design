const assert = require('assert');
const Rover = require('../src/rover');

describe('Mars Rover', () => {
    it('Turns right N to E', () => {
        let rover = new Rover(5, 5, 'N');
        rover = rover.go("R");
        assert.equal(rover.facing, 'E');
    });

    it('Turns right E to S', () => {
        let rover = new Rover(5, 5, 'E');
        rover = rover.go("R");
        assert.equal(rover.facing, 'S');
    });

    it('Turns right S to W', () => {
        let rover = new Rover(5, 5, 'S');
        rover = rover.go("R");
        assert.equal(rover.facing, 'W');
    });

    it('Turns right W to N', () => {
        let rover = new Rover(5, 5, 'W');
        rover = rover.go("R");
        assert.equal(rover.facing, 'N');
    });

    it('Turns left N to W', () => {
        let rover = new Rover(5, 5, 'N');
        rover = rover.go("L");
        assert.equal(rover.facing, 'W');
    });

    it('Turns left W to S', () => {
        let rover = new Rover(5, 5, 'W');
        rover = rover.go("L");
        assert.equal(rover.facing, 'S');
    });

    it('Turns left S to E', () => {
        let rover = new Rover(5, 5, 'S');
        rover = rover.go("L");
        assert.equal(rover.facing, 'E');
    });

    it('Turns left E to N', () => {
        let rover = new Rover(5, 5, 'E');
        rover = rover.go("L");
        assert.equal(rover.facing, 'N');
    });

    it('Moves forward Y+1 facing N', () => {
        let rover = new Rover(5, 5, 'N');
        rover = rover.go('F');
        assert.deepEqual(rover.position, {x: 5, y:6});
    });

    it('Moves forward X+1 facing E', () => {
        let rover = new Rover(5, 5, 'E');
        rover = rover.go('F');
        assert.deepEqual(rover.position, {x: 6, y:5});
    });

    it('Moves forward Y-1 facing S', () => {
        let rover = new Rover(5, 5, 'S');
        rover = rover.go('F');
        assert.deepEqual(rover.position, {x: 5, y:4});
    });

    it('Moves forward X-1 facing W', () => {
        let rover = new Rover(5, 5, 'W');
        rover = rover.go('F');
        assert.deepEqual(rover.position, {x: 4, y:5});
    });

    it('Moves back Y-1 facing N', () => {
        let rover = new Rover(5, 5, 'N');
        rover = rover.go('B');
        assert.deepEqual(rover.position, {x: 5, y:4});
    });

    it('Moves back X-1 facing E', () => {
        let rover = new Rover(5, 5, 'E');
        rover = rover.go('B');
        assert.deepEqual(rover.position, {x: 4, y:5});
    });

    it('Moves back Y+1 facing S', () => {
        let rover = new Rover(5, 5, 'S');
        rover = rover.go('B');
        assert.deepEqual(rover.position, {x: 5, y:6});
    });

    it('Moves back X+1 facing W', () => {
        let rover = new Rover(5, 5, 'W');
        rover = rover.go('B');
        assert.deepEqual(rover.position, {x: 6, y:5});
    });

    it('Executes sequence of instructions', () => {
        let rover = new Rover(5, 5, 'N');
        rover = rover.go('RFF');
        assert.deepEqual(rover, {facing: 'E', position: {x: 7, y: 5}});
    });

    it('Ignores invalid instructions', () => {
        let rover = new Rover(5, 5, 'N');
        rover = rover.go('X');
        assert.deepEqual(rover, {facing: 'N', position: {x: 5, y: 5}});
    })
})
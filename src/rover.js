const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

class Rover {

    position;
    facing;

    constructor(x, y, facing){
        this.position = {x: x, y: y};
        this.facing = facing;
    }

    go(instructions) {

        logger.log({
            level: 'info',
            message: 'Rover received instructions ' + instructions
        });

        return Array.from(instructions).reduce((rover, instruction) => {
            if (instruction == 'R') {
                if (rover.facing == 'N')
                    return {...rover, facing: "E"};

                if (rover.facing == 'E')
                    return {...rover, facing: 'S'};

                if (rover.facing == 'S')
                    return {...rover, facing: 'W'};

                return {...rover, facing: 'N'};
            }
            ;

            if (instruction == 'L') {
                if (rover.facing == 'N')
                    return {...rover, facing: "W"};

                if (rover.facing == 'W')
                    return {...rover, facing: 'S'};

                if (rover.facing == 'S')
                    return {...rover, facing: 'E'};

                return {...rover, facing: 'N'};
            }

            if (instruction == 'F') {
                if (rover.facing == 'N')
                    return {...rover, position: {...rover.position, y: rover.position.y + 1}};

                if (rover.facing == 'E')
                    return {...rover, position: {...rover.position, x: rover.position.x + 1}};

                if (rover.facing == 'S')
                    return {...rover, position: {...rover.position, y: rover.position.y - 1}};

                return {rover, position: {...rover.position, x: rover.position.x - 1}};
            }
            ;

            if (instruction == 'B') {
                if (rover.facing == 'N')
                    return {...rover, position: {...rover.position, y: rover.position.y - 1}};

                if (rover.facing == 'E')
                    return {...rover, position: {...rover.position, x: rover.position.x - 1}};

                if (rover.facing == 'S')
                    return {...rover, position: {...rover.position, y: rover.position.y + 1}};

                return {rover, position: {...rover.position, x: rover.position.x + 1}};
            }

            return rover;

        }, this);
    }
}

module.exports = Rover;
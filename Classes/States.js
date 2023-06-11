export const states = {
    IdleRight: 0,
    IdleLeft: 1,
    RunRight: 2,
    RunLeft: 3
}

export class State {
    constructor(state_name) {
        this.state = state_name
    }
}

export class IdleRight extends (State) {
    constructor(vessel) {
        super('IdleRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/IdleRight.png'
        this.frames_number = 6
    }
    
    enterState () {}

    handleInput (new_input) {
        if (new_input === 'PRESS o') {this.vessel.setState(states.RunLeft)}
        else if (new_input === 'PRESS p') {this.vessel.setState(states.RunRight)}
    }

    exitState () {}
}

export class IdleLeft extends (State) {
    constructor(vessel) {
        super('IdleLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/IdleLeft.png'
        this.frames_number = 6
    }

    enterState () {}

    handleInput (new_input) {
        if (new_input === 'PRESS p') {this.vessel.setState(states.RunRight)}
        else if (new_input === 'PRESS o') {this.vessel.setState(states.RunLeft)}
    }

    exitState () {}
}

export class RunLeft extends (State) {
    constructor(vessel) {
        super('RunLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/RunLeft.png'
        this.frames_number = 7
    }

    enterState () {}

    handleInput (new_input) {
        console.log(this.vessel)
        if (new_input === 'RELEASE o') {this.vessel.setState(states.IdleLeft)}
    }

    exitState () {}
}

export class RunRight extends (State) {
    constructor(vessel) {
        super('RunRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/RunRight.png'
        this.frames_number = 7
    }

    enterState () {}

    handleInput (new_input) {
        
        if (new_input === 'RELEASE p') {
            console.log(states.IdleRight)
            this.vessel.setState(states.IdleRight)}
    }

    exitState () {}
}

class JumpRight extends (State) {
    constructor(state_name, vessel, img, frames_number) {
        super(state_name, vessel)
        this.image = new Image()
        this.image.src = img
        this.frames_number = frames_number
    }

    enterState () {}

    draw () {}

    inputHandler () {}

    update () {}

    exitState () {}
}

class JumpLeft extends (State) {
    constructor(state_name, vessel, img, frames_number) {
        super(state_name, vessel)
        this.image = new Image()
        this.image.src = img
        this.frames_number = frames_number
    }

    enterState () {}

    draw () {}

    inputHandler () {}

    update () {}

    exitState () {}
}

class FallRight extends (State) {
    constructor(state_name, vessel, img, frames_number) {
        super(state_name, vessel)
        this.image = new Image()
        this.image.src = img
        this.frames_number = frames_number
    }

    enterState () {}

    draw () {}

    inputHandler () {}

    update () {}

    exitState () {}
}

class FallLeft extends (State) {
    constructor(state_name, vessel, img, frames_number) {
        super(state_name, vessel)
        
    }

    enterState () {}

    draw () {}

    inputHandler () {}

    update () {}

    exitState () {}
}
export const states = {
    IdleRight: 0,
    IdleLeft: 1,
    RunRight: 2,
    RunLeft: 3,
    JumpRight: 4,
    JumpLeft: 5,
    FallRight: 6,
    FallLeft: 7
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
    
    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        
    }

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() === true) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}}

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

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 0
        
    }

    handleInput (new_input) {
        if (new_input.leftRightLS >= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()
        }
        else if (new_input.leftRightLS <= -0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}}
    
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

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -5
    }

    handleInput (new_input) {
        if (new_input.leftRightLS >= -0.5 && new_input.leftRightLS <= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() === true) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}}
    
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

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 5
    }

    handleInput (new_input) {
        
        if (new_input.leftRightLS >= -0.5 && new_input.leftRightLS <= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.A_button_pressed === true && this.vessel.isOnGround() === true) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}}
    
    exitState () {}
}

export class JumpRight extends (State) {
    constructor(vessel) {
        super('JumpRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightRight.png'
        this.frames_number = 3 //solo los tres primeros frames del .png
    }

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = 3.5
        if (this.vessel.isOnGround() === true) {
            this.vessel.speed.y = -30
        }
    }

    handleInput (new_input) {
        
        if (new_input.leftRightLS >= -0.15 && new_input.leftRightLS <= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS <= -0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpLeft)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
    }

    exitState () {}
}

export class JumpLeft extends (State) {
    constructor(vessel) {
        super('JumpLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightLeft.png'
        this.frames_number = 3 //solo los tres primeros frames del .png
    }

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -3.5
        if (this.vessel.isOnGround() === true) {
            this.vessel.speed.y = -30
        }
    }

    handleInput (new_input) {
        

        if (new_input.leftRightLS >= -0.15 && new_input.leftRightLS <= 0.15) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.JumpRight)
            this.vessel.current_state.enterState()}
        else if (this.vessel.speed.y >= 0) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()
        }
    }

    exitState () {}
}

export class FallRight extends (State) {
    constructor(vessel) {
        super('FallRight')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightRight.png'
        this.frames_number = 3 //solo los tres primeros frames del .png
    }

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
    }

    handleInput (new_input) {
        if (new_input.leftRightLS <= -0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallLeft)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= -0.5 && new_input.leftRightLS <= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleRight)
            this.vessel.current_state.enterState()

        }
        else if (this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunRight)
            this.vessel.current_state.enterState()
        }
    }

    exitState () {}
}

export class FallLeft extends (State) {
    constructor(vessel) {
        super('FallLeft')
        this.vessel = vessel
        this.image = new Image()
        this.image.src = '../Assets/Onre/FlightLeft.png'
        this.frames_number = 3 //solo los tres primeros frames del .png
    }

    enterState () {
        this.vessel.max_frames = this.frames_number
        this.vessel.current_frame = 0
        this.vessel.speed.x = -3.5
    }

    handleInput (new_input) {
        
        if (new_input.leftRightLS >= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.FallRight)
            this.vessel.current_state.enterState()}
        else if (new_input.leftRightLS >= -0.5 && new_input.leftRightLS <= 0.5) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.IdleLeft)
            this.vessel.current_state.enterState()

        }
        else if (this.vessel.isOnGround()) {
            this.vessel.current_state.exitState()
            this.vessel.setState(states.RunLeft)
            this.vessel.current_state.enterState()
        }
    }

    exitState () {}
}
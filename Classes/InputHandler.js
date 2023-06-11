export default class InputHandler {
    constructor () {
        this.last_key = ''
        window.addEventListener('keydown', (event) => {
            
            switch(event.key){
                case 'o':
                    this.last_key = 'PRESS o'
                    break
                case 'p':
                    this.last_key = 'PRESS p'
                    break
                case ' ':
                    this.last_key = 'PRESS space'
                    break
            }
        })
        window.addEventListener('keyup', (event) => {
            switch(event.key){
                case 'o':
                    this.last_key = 'RELEASE o'
                    break
                case 'p':
                    this.last_key = 'RELEASE p'
                    break
                case ' ':
                    this.last_key = 'RELEASE space'
                    break
            }
        })
    }

}
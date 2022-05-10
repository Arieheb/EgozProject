import {generateUniqueId} from '../utils/uid'

class Job{
    constructor(title,location,description){
        this.id = generateUniqueId()
        this.title=title
        this.location=location
        this.description=description
    }
}

export default Job
import {generateUniqueId} from '../utils/uid'

class Job{
    constructor(title, location, description, name, phone, email){
        this.id = generateUniqueId()
        this.title=title
        this.location=location
        this.description=description
        this.name=name
        this.phone=phone
        this.email=email
    }
}

export default Job
import Images from "../models/Image";

export default {
    render(image: Images) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`
        }
    },
    renderMany(image: Images[]){
        return image.map(image => this.render(image))
    }
};
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    // url: "mongodb://127.0.0.1:27017/whatsAppClone",
    url: "mongodb+srv://akashlowanshi86126:h91hOV6rJkJjZLNE@cluster0.ggu19ho.mongodb.net/?retryWrites=true&w=majority",
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (req, file) => {
        const match = ['image/png', 'image/jpg'];
        if (match.indexOf(file.mimeType) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }

}); 

module.exports =  multer({ storage });

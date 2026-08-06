import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max

    fileFilter: (req, file, cb) => {

        const isPdfMime = file.mimetype === "application/pdf";
        const isPdfExt = path.extname(file.originalname).toLowerCase() === ".pdf";

        if (isPdfMime || isPdfExt) {
            return cb(null, true);
        }

        cb(
            new Error(
                `Only PDF files are allowed. Received: ${file.mimetype}`
            )
        );
    },
});

export default upload;
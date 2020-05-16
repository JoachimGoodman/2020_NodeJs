const router = require("express").Router()

const crypto = require(require("crypto"))

console.log(crypto.randomBytes(18).toString("hex"))

const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/")
    },
    fileName: (req, file, cb) => {
        cb(null, "test.mp4")
    }
})
const upload = multer({storage: storage})

const videos = [{
    id: "",
    title: "NightSky",
    thumbnail: "",
    description: "Watch this beautiful sky and enjoy the stars",
    fileName: "29a4415c-81c3-45ca-b95f-fe18c74998a0.mp4",
    uploadDate: "",
    category: "Science",
    tags: ["stars", "sky"]
}]

const videosPerPage = 12

router.get("/videos", (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 1
    const start = (page - 1) * videosPerPage
    const end = start + videosPerPage

    return res.send({ response: videos.slice(start, end) })
})

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) })
})

router.post("/videos", upload.single("uploadedVideo"), (req, res) => {
    return res.redirect("/")
})

module.exports = router
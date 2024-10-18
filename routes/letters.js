const express = require('express');
// const User = require('../models/user');
const  {Letter}  = require('../models');
const router = express.Router();

// 편지지 종류 저장
router.post('/choose', async (req,res) => {
    const { kind } = req.body;     // 알려주기

    try {
        const newLetter = await Letter.create({
            date: "2024-10-18",             
            dear: "John",               
            image_path: "/images/sample.jpg", 
            fruit_kind: kind,             
          });

        if(newLetter) {
            res.render('index'); // 수정하기
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ message : "편지지 종류 저장 실패"});
    }
});

// 이미지 경로 저장
router.patch('/images/:id', async (req,res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const [updatedPath] = await Letter.update(
            { image_path : content },
            { where : {id : id} }
        );

        if(updatedPath) {
            res.render('');     // 변경하기
        }
    }
    catch(error) {
        return res.status(500).json({ message : "이미지 경로 저장 실패"});
    }
})

// 이미지 경로 조회
router.get('/images/:id', async (req,res) => {
    const { id } = req.params;

    try {
        const imagepath = await Letter.findOne({
             where : { id }
        });

        if(!imagepath) {
            return res.status(404).json({ message: "해당 이미지를 찾을 수 없습니다." });
        }

        const path = imagepath.image_path;
        return res.status(200).json({ path });
    }
    catch(error) {
        return res.status(500).json({ message : "이미지 경로 저장 실패"});
    }
})

module.exports = router;
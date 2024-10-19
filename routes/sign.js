const express = require('express');
const router = express.Router();
const {User} = require('../models');

// 사용자 이름 조회
router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId);

        if (user) {
            res.json({
                name: user.name
            });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

// 회원가입(사용자 데이터 저장)
router.post('/signup', async (req, res) => {
    const { username, name, password } = req.body;
    console.log(username);

    try {
        // 이미 존재하는 username이 있는지 확인
        const existingUser = await User.findOne({ where: { userId: username } });
        if (existingUser) {
            return res.status(400).send(`duplicate username: ${username}`);
        }

        // 새로운 사용자 데이터 저장
        const newUser = await User.create({
            userId: username,
            name: name,
            password: password, // 평문 비밀번호 저장
        });

        // 사용자 생성 후 성공 메시지 반환
        res.status(201).json({ message: '회원가입이 완료되었습니다.', user: newUser });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
});

// 로그인(사용자 데이터 조회)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log(username);

    try {
        // username으로 사용자 찾기
        const user = await User.findOne({ where: { userId: username } });

        // 가입되지 않은 username인 경우
        if (!user) {
            return res.status(400).send(`not registered username: ${username}`);
        }

        // 비밀번호가 일치하지 않는 경우
        if (password !== user.password) {
            return res.status(400).send('incorrect password');
        }

        // 로그인 성공 시 응답
        res.status(200).json({ message: '로그인 성공', user: { userId: user.userId, name: user.name } });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('서버 오류가 발생했습니다.');
    }
});

module.exports = router;

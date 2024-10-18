const express = require('express');
const router = express.Router();
const USER_COOKIE_KEY = 'USER';


const fs = require('fs').promises;
const USERS_JSON_FILENAME = './public/user.json';

async function fetchAllUsers() {
    try {
        const data = await fs.readFile(USERS_JSON_FILENAME);
        const users = JSON.parse(data.toString());
        // users가 배열인지 확인
        if (!Array.isArray(users)) {
            console.error("Data is not an array. Returning empty array.");
            return []; // 배열이 아닐 경우 빈 배열 반환
        }
        console.log("Fetched users:", users); // 로그로 데이터 확인
        return users;
    } catch (error) {
        console.error("Error reading users file:", error);
        return []; // 파일 읽기 오류가 발생한 경우에도 빈 배열 반환
    }
}


async function fetchUser(username) {
    const users = await fetchAllUsers();
    console.log("Fetched users:", users); // users 로그 확인
    const user = users.find((user) => user.username === username);
    return user;
}


async function createUser(newUser) {
    const users = await fetchAllUsers();
    users.push(newUser);
    await fs.writeFile(USERS_JSON_FILENAME, JSON.stringify(users, null, 2)); // JSON 형식을 예쁘게 저장
}


router.get('/', async (req, res) => {
    console.log("????")
    // 'user'라는 쿠키 데이터를 가져옴
    // 쿠키가 존재하지 않을 경우 로그인이 되지 않았다는 뜻
    const userCookie = req.cookies[USER_COOKIE_KEY];
    
    if (userCookie) {
        console.log(userCookie)
        // 쿠키가 존재하는 경우, 쿠키 VALUE를 JS 객체로 변환
        const userData = JSON.parse(userCookie);
        // user 객체에 저장된 username이 db에 존재하는 경우,
        // 유효한 user이며 로그인이 잘 되어 있다는 뜻.
        const user = await fetchUser(userData.username);
        if (user) {
            // JS 객체로 변환된 user 데이터에서 username, name, password를 추출하여 클라이언트에 렌더링
            res.status(200).send(`
                <a href="/logout">Log Out</a>
                <h1>id: ${userData.username}, name: ${userData.name}, password: ${userData.password}</h1>
            `);
            return;
        }
    }

    res.render('home');
    // 쿠키가 존재하지 않는 경우, 로그인 되지 않은 것으로 간주
});

router.get('/sign/:id', async (req, res) => {       // 사용자 이름 조회
    const userId = req.params.id;

    try {
        const user = await UserModel.findByPk(userId);

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

router.post('/signup', async (req, res) => {    // 회원가입(사용자 데이터 저장)
    const { username, name, password } = req.body;
    const user = await fetchUser(username);

    // 이미 존재하는 username일 경우 회원 가입 실패
    if (user) {
        res.status(400).send(`duplicate username: ${username}`);
        return;
    }

    // 아직 가입되지 않은 username인 경우 db에 저장
    // KEY = username, VALUE = { name, password }
    const newUser = {
        username,
        name,
        password,
    };
    await createUser(newUser);

    // db에 저장된 user 객체를 문자열 형태로 변환하여 쿠키에 저장
    res.cookie(USER_COOKIE_KEY, JSON.stringify(newUser));
    // 가입 완료 후, 루트 페이지로 이동
    res.json({ result: "success", user: newUser });
});



router.post('/login', async (req, res) => {     // 로그인(사용자 데이터 조회)
    const { username, password } = req.body;
    const user = await fetchUser(username);

    // 가입 안 된 username인 경우
    if (!user) {
        res.status(400).send(`not registered username: ${username}`);
        return;
    }
    // 비밀번호가 틀렸을 경우
    if (password !== user.password) {
        res.status(400).send('incorrect password');
        return;
    }

    // db에 저장된 user 객체를 문자열 형태로 변환하여 쿠키에 저장
    res.cookie(USER_COOKIE_KEY, JSON.stringify(user));
    // 로그인(쿠키 발급) 후, 루트 페이지로 이동
    res.json({ username: username, password: password});
});


module.exports = router;
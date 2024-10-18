const express = require('express');
const router = express.Router();

const { letter } = require('./models');  // 모델 가져오기
const sequelize = require('sequelize');

router.get('/:id', async (req, res) => {        // 받는 사람(dear), 날짜(date) 조회
    try {
        const letterId = req.params.id;  // URL에서 :id 값을 가져옴
        const letter = await letter.findOne({
            where: {
                id: letterId
            },
            attributes: ['dear', 'date']  // dear(받는 사람)와 date(날짜)만 선택하여 조회
        });

        if (!letter) {
            return res.status(404).json({ message: 'Record not found' });
        }

        return res.json(letter);  // 조회된 데이터를 반환
    } catch (error) {
        console.error('Error fetching letter:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/fruits/:fruit_count', async (req, res) => {     // 과일 종류별 갯수 조회
    try {
        const fruitKind = req.params.fruit_kind;  // URL에서 :fruit_kind 값을 가져옴
        const fruits = await Fruit.findAll({
            where: {
                fruit_kind: fruitKind
            },
            attributes: [
                'fruit_kind', 
                [sequelize.fn('COUNT', sequelize.col('fruit_kind')), 'count']  // 과일 종류별로 카운트
            ],
            group: ['fruit_kind']  // 과일 종류(fruit_kind)별로 그룹화
        });

        if (!fruits || fruits.length === 0) {
            return res.status(404).json({ message: 'No fruits found for the given type' });
        }

        return res.json(fruits);  // 조회된 데이터를 반환
    } catch (error) {
        console.error('Error fetching fruits:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

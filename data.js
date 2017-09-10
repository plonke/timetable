module.exports = () => {
    return {
        weeks: {
            even : [
                //Sunday
                [],

                //Monday
                [{
                    time_id: 2,
                    pair_id: 1,
                    cabinet_id: 3
                }, {
                    time_id: 3,
                    pair_id: 1,
                    cabinet_id: 3
                }, {
                    time_id: 4,
                    pair_id: 1,
                    cabinet_id: 3
                }],

                //Tuesday
                [{
                    time_id: 1,
                    pair_id: 2,
                    cabinet_id: 4
                }, {
                    time_id: 2,
                    pair_id: 2,
                    cabinet_id: 1
                }, {
                    time_id: 3,
                    pair_id: 2,
                    cabinet_id: 1
                }],

                //Wednesday
                [{
                    time_id: 2,
                    pair_id: 1,
                    cabinet_id: 3
                }, {
                    time_id: 3,
                    pair_id: 4,
                    cabinet_id: 2
                }, {
                    time_id: 4,
                    pair_id: 4,
                    cabinet_id: 2
                }],

                //Thursday
                [{
                    time_id: 2,
                    pair_id: 5,
                    cabinet_id: 1
                }, {
                    time_id: 3,
                    pair_id: 6,
                    cabinet_id: 8
                }, {
                    time_id: 4,
                    pair_id: 6,
                    cabinet_id: 8
                }],

                //Friday
                [{
                    time_id: 1,
                    pair_id: 7,
                    cabinet_id: 5
                }, {
                    time_id: 2,
                    pair_id: 7,
                    cabinet_id: 1
                }, {
                    time_id: 3,
                    pair_id: 7,
                    cabinet_id: 1
                }],

                //Saturday
                [],

                //Sunday :))
                []
            ],

            odd: [
                //Sunday
                [],

                //Monday
                [{
                    time_id: 2,
                    pair_id: 1,
                    cabinet_id: 3
                }, {
                    time_id: 3,
                    pair_id: 1,
                    cabinet_id: 3
                }, {
                    time_id: 4,
                    pair_id: 8,
                    cabinet_id: 9
                }],

                //Tuesday
                [{
                    time_id: 1,
                    pair_id: 2,
                    cabinet_id: 4
                }, {
                    time_id: 2,
                    pair_id: 2,
                    cabinet_id: 1
                }, {
                    time_id: 3,
                    pair_id: 3,
                    cabinet_id: 7
                }],

                //Wednesday
                [{
                    time_id: 2,
                    pair_id: 1,
                    cabinet_id: 3
                }, {
                    time_id: 3,
                    pair_id: 4,
                    cabinet_id: 2
                }, {
                    time_id: 4,
                    pair_id: 4,
                    cabinet_id: 2
                }],

                //Thursday
                [{
                    time_id: 1,
                    pair_id: 8,
                    cabinet_id: 9
                }, {
                    time_id: 2,
                    pair_id: 5,
                    cabinet_id: 1
                }, {
                    time_id: 3,
                    pair_id: 5,
                    cabinet_id: 6
                }, {
                    time_id: 4,
                    pair_id: 3,
                    cabinet_id: 8
                }],

                //Friday
                [{
                    time_id: 1,
                    pair_id: 7,
                    cabinet_id: 5
                }, {
                    time_id: 2,
                    pair_id: 7,
                    cabinet_id: 1
                }, {
                    time_id: 3,
                    pair_id: 7,
                    cabinet_id: 1
                }],

                //Saturday
                [],

                //Sunday :))
                []
            ]
        },

        pairs: [
            'Менеджмент IT проектов',
            'Инф-прав системы',
            'Психология',
            'Решения 1С для бизнеса',
            'Проектный практикум',

            'Русский язык',
            'Web-программирование',
            'Физра'
        ],

        cabinets: [
            'ЛК 107',
            'ЛК 226',
            'ЛК 407',

            'У 207',
            'У 223',
            'У 443',
            'У 450',
            'У 605',

            'CK'
        ],

        srs: [
            moment('2017-09-14'),
            moment('2017-09-19'),
            moment('2017-09-22'),
            moment('2017-09-25'),
            moment('2017-09-27'),

            moment('2017-10-07'),
            moment('2017-10-10'),
            moment('2017-10-13'),
            moment('2017-10-19'),
            moment('2017-10-28'),
            moment('2017-10-30'),

            moment('2017-11-01'),
            moment('2017-11-09'),
            moment('2017-11-14'),
            moment('2017-11-17'),
            moment('2017-11-20'),
            moment('2017-11-22'),

            moment('2017-12-02'),
            moment('2017-12-05'),
            moment('2017-12-08'),
            moment('2017-12-14')
        ],

        times: [{
            from: moment({hour: 8, minute: 15, seconds: 0}),
            to: moment({hour: 9, minute: 45, seconds: 0})
        }, {
            from: moment({hour: 9, minute: 55, seconds: 0}),
            to: moment({hour: 11, minute: 25, seconds: 0})
        }, {
            from: moment({hour: 11, minute: 35, seconds: 0}),
            to: moment({hour: 13, minute: 5, seconds: 0})
        }, {
            from: moment({hour: 13, minute: 45, seconds: 0}),
            to: moment({hour: 15, minute: 15, seconds: 0})
        }]
    }
}
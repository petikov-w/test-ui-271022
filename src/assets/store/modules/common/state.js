export default {
   listOptions: [
        {name: 'Опция 1', value: 1},
        {name: 'Опция 2', value: 2},
        {name: 'Опция 3', value: 3},
        {name: 'Опция 4', value: 4},
        {name: 'Опция 5', value: 5},
        {name: 'Опция 6', value: 6},
    ],
    listDocuments: [
        require('@/assets/images/doc1.png'),
        require('@/assets/images/doc2.png'),
        require('@/assets/images/doc3.png'),
        require('@/assets/images/doc4.png')
    ],
    listGefest: [
        {
            image_a: require('@/assets/images/lenta_a.png'),
            image_na: require('@/assets/images/lenta_na.png'),
            image_main: require('@/assets/images/lenta_m.png'),
            text_tab: "Штрипс, лента оцинкованная",
            content_side: [
                {
                    text: "Штрипс, лента оцинкованная",
                    text_visible: false,
                    list_side: ["Оцинкованный штрипс",
                        "Оцинкованная стальная лента",
                        "Оцинкованная полоса Г/К"]
                }
            ],
        },
        {
            image_a: require('@/assets/images/setka_a.png'),
            image_na: require('@/assets/images/setka_na.png'),
            image_main: require('@/assets/images/setka_m.png'),
            text_tab: "Сетка",
            content_side: [
                {
                    text: "Сетка",
                    text_visible: false,
                    list_side: ["Сетка сварная", "Сетка ПВЛ"]
                }
            ]
        },
        {
            image_a: require('@/assets/images/profil_a.png'),
            image_na: require('@/assets/images/profil_na.png'),
            image_main: require('@/assets/images/profil_m.png'),
            text_tab: "Профиль оцинкованный",
            content_side: [
                {
                    text: "",
                    text_visible: false,
                    list_side: ["Профиль ГКЛ",
                        "Профиль фасадный",
                        "Профиль армирующий",
                        "Комплектующие"]
                }
            ]
        },
        {
            image_a: require('@/assets/images/profnastil_a.png'),
            image_na: require('@/assets/images/profnastil_na.png'),
            image_main: require('@/assets/images/profnastil_m.png'),
            text_tab: "Профнастил",
            content_side: [
                { text: "Профнастил",
                  text_visible: false,
                  list_side: ["Профнастил С8", "Профнастил Н57", "Профнастил Н60", "Профнастил Н75",
                               "Профнастил НС35", "Профнастил С13", "Профнастил С18", "Профнастил С21",
                               "Профнастил С44", "Профнастил СП20"]
                }
            ]
        },
        {
            image_a: require('@/assets/images/blackprocat_a.png'),
            image_na: require('@/assets/images/blackprocat_na.png'),
            image_main: require('@/assets/images/blackprocat_m.png'),
            text_tab: "Черный металлопрокат",
            content_side: [
                {
                    text: "Листовой прокат",
                    text_visible: true,
                    list_side: ["Лист Х/К", "Лист Г/К", "Лист НЛГ", "Лист ОЦ", "Лист рифл", "Лист ПВЛ", "Лист полимер"]
                },
                {
                    text: "Сортовой прокат",
                    text_visible: true,
                    list_side: ["Арматура", "Катанка", "Круг", "Проволока", "Квадрат", "Шестигранник"]
                },
                {
                    text: "Трубный прокат",
                    text_visible: true,
                    list_side: ["Труба профильная", "Труба Б/Ш", "Труба Э/С"]
                },
                {
                    text: "Фасонный прокат",
                    text_visible: true,
                    list_side: ["Балка", "Уголок", "Швеллер"]
                },

            ]
        },
        {
            image_a: require('@/assets/images/zakaz_a.png'),
            image_na: require('@/assets/images/zakaz_na.png'),
            image_main: require('@/assets/images/zakaz_m.png'),
            text_tab: "Изделия на заказ",
            content_side: [
                {
                    text: "Изделия на заказ",
                    text_visible: false,
                    list_side: ["по любым вашим размерам", "из интересующих марок стали",
                                "в соотвествии с ТУ и ГОСТ"]
                }
            ]
        }
    ]
}
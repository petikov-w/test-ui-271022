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
            text_tab: "Штрипс, лента<br> оцинкованная",
            text_side: "Штрипс, лента оцинкованная",
            list_side: ["Оцинкованный штрипс",
                "Оцинкованная стальная лента",
                "Оцинкованная полоса Г/К"]
        },
        {
            image_a: require('@/assets/images/setka_a.png'),
            image_na: require('@/assets/images/setka_na.png'),
            image_main: require('@/assets/images/setka_m.png'),
            text_tab: "Сетка",
            text_side: "Сетка",
            list_side: ["Сетка сварная",
                "Сетка ПВЛ"]
        },
        {
            image_a: require('@/assets/images/profil_a.png'),
            image_na: require('@/assets/images/profil_na.png'),
            image_main: require('@/assets/images/profil_m.png'),
            text_tab: "Профиль<br> оцинкованный",
            text_side: "Профиль оцинкованный",
            list_side: ["Профиль ГКЛ",
                "Профиль фасадный",
                "Профиль армирующий",
                "Комплектующие"]
        },
        {
            image_a: require('@/assets/images/profnastil_a.png'),
            image_na: require('@/assets/images/profnastil_na.png'),
            image_main: require('@/assets/images/profnastil_m.png'),
            text_tab: "Профнастил",
            text_side: "Профнастил",
            list1_side: ["Профнастил С8", "Профнастил Н57", "Профнастил Н60", "Профнастил Н75", "Профнастил НС35"],
            list2_side: ["Профнастил С13", "Профнастил С18", "Профнастил С21", "Профнастил С44", "Профнастил СП20"]
        },
        {
            image_a: require('@/assets/images/blackprocat_a.png'),
            image_na: require('@/assets/images/blackprocat_na.png'),
            image_main: require('@/assets/images/blackprocat_m.png'),
            text_tab: "Черный<br> металлопрокат",
            text1_side: "Листовой прокат",
            list1_side: ["Лист Х/К", "Лист Г/К", "Лист НЛГ", "Лист ОЦ", "Лист рифл", "Лист ПВЛ", "Лист полимер"],
            text2_side: "Сортовой прокат",
            list2_side: ["Арматура", "Катанка", "Круг", "Проволока", "Квадрат", "Шестигранник"],
            text3_side: "Трубный прокат",
            list3_side: ["Труба профильная", "Труба Б/Ш", "Труба Э/С"],
            text4_side: "Фасонный прокат",
            list4_side: ["Балка", "Уголок", "Швеллер"]
        },
        {
            image_a: require('@/assets/images/zakaz_a.png'),
            image_na: require('@/assets/images/zakaz_na.png'),
            image_main: require('@/assets/images/zakaz_m.png'),
            text_tab: "Изделия<br> на заказ",
            text_side: "Изделия на заказ",
            list_side: ["по любым вашим размерам",
                "из интересующих марок стали",
                "в соотвествии с ТУ и ГОСТ"]
        }
    ]
}
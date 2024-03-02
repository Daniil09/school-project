
function processForm() {
    let sum = 0;
    // Создаем массив
    hc = new Array(15);
    // Если обнаружено, что выбран первый вариант первого вопроса в форме, см. В документе, используйте сумму + оценка варианта
    if (document.see.c1[0].checked == 1) sum += 0;
    if (document.see.c1[1].checked == 1) sum += 500;

    if (document.see.c2[0].checked == 1) sum += 0;
    if (document.see.c2[1].checked == 1) sum += 10;
    if (document.see.c2[2].checked == 1) sum += 50;
    if (document.see.c2[3].checked == 1) sum += 100;

    if (document.see.c3[0].checked == 1) sum += 15;
    if (document.see.c3[1].checked == 1) sum += 50;
    if (document.see.c3[2].checked == 1) sum += 155;


    if (sum <= 4) document.see.answer.value = "Ваш счет" + sum + "Разум \n Вы психически здоровы и не в депрессии";
    if (sum <= 10 && sum >= 5) document.see.answer.value = "Ваш счет" + sum + "Мин \n У вас иногда бывает депрессия";
    if (sum <= 20 && sum >= 11) document.see.answer.value = "Ваш счет" + sum + "Мин \n У вас легкая депрессия";
    if (sum <= 30 && sum >= 21) document.see.answer.value = "Ваш счет" + sum + "Мин \n У вас умеренная депрессия";
    if (sum <= 45 && sum >= 31) document.see.answer.value = "Ваш счет" + sum + "Мин.\n У вас тяжелая депрессия, и вам нужно немедленно обратиться к специалисту";

}


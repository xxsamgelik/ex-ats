<?php
/**
 * @throws Exception
 */
function generateUniqueNumbers($length, $digits): array
{

    $min = pow(10, $digits - 1); // нахождение минимального числа
    $max = pow(10, $digits) - 1; // нахождение максимального числа

    // если запрошено больше уникальных чисел, чем реально есть вызываем исключение
    if ($length > ($max - $min + 1)) {
        throw new Exception("нельзя сгенерировать столько уникальных чисел");
    }


    $numbers = [];

    //цикл пока не набрали нужное кол-во чисел
    while (count($numbers) < $length) {
        // использую функцию rand для псевда рандома
        $num = rand($min, $max);

        //проверяю действительно ли число уникальное
        if (!in_array($num, $numbers)) {
            $numbers[] = $num;
        }
    }

    return $numbers;
}

try {
    print_r(generateUniqueNumbers(50000, 9));
} catch (Exception $e) {
    throw new ($e->getMessage());
}

[![Build status](https://ci.appveyor.com/api/projects/status/8opamrdcp34821qp?svg=true)](https://ci.appveyor.com/project/AleksandraIvanova90/playing-with-goblins)

### Игра с гоблинами

![](https://github.com/netology-code/ahj-homeworks/blob/video/events/pic/GracefulMiniatureBustard-small.gif)


#### Описание

Нужно доделать игру с гоблинами, реализовав следующую логику:

### Этап 1: Перемещение объекта в DOM Tree.

Поскольку мы более гуманны, вам нужно реализовать лишь первую часть этой игры - перемещение объекта в DOM Tree.

Для этого разработано игровое поле 4x4 и персонаж в виде картинки `img` (при загрузке страницы программно генерируется и ставится в рандомную позицию внутри игрового поля). С помощью функции `setInterval` запланировано перемещение существующего объекта `img` в другое поле (алгоритм - рандомное перемещение, без перемещения в то же самое поле).

### Этап 2: Реализуем оставшуюся логику

1. Гоблин появляется в рандомной точке (набор точек фиксирован) ровно на 1 секунду.
2. Если пользователь успел за это время кликнуть на этой точке то:
* пользователю засчитывается +1 балл
* гоблин пропадает из ячейки
3. Если пользователь пропустил 5 появлений гоблинов, то игра завершается.
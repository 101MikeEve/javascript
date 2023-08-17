


Строка меню и подсказка: (Стройка) Проверка Атрибута 2 в областях
Строка состояния:
Идентификатор справки:
Позиция в меню: 3
Приоритет: 1


          


try{
  var lib = new Document(1910100005);
  lib.Execute(3);
  var lib3 = new Document(1944980003);
  lib3.Execute(3);
 } catch(...){
    Alert("Не удалось подключить библиотеки скриптов");
    return;
 }
{
var list1 = Application.GetCurrentList();

if(list1.Size > 0) new DocFolder ("Все обработанные документы", true, null, list1, 2, null, true);

list1.AddEmptyCondition(2)
 
if(list1.Size > 0) new DocFolder ("Атр 2 пуст", true, null, list1, 2, null, true);
}





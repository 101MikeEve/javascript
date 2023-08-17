


Строка меню и подсказка: (Стройка) Проверка иерархии c Изменениями
Строка состояния:
Идентификатор справки:
Позиция в меню: 3
Приоритет: 1


          


//скрипт с добавлением проверки 34го атрибута (подлежит удалению из строй-ресурса 925711026)


 try{
  var lib = new Document(1944980003);
  lib.Execute(3);
  var lib2 = new Document(1910100005);
  lib2.Execute(3);
  var lib3 = new Document(1910100060);
  lib3.Execute(3);
 } catch(...){
    Alert("Не удалось подключить библиотеки скриптов");
    return;
 }

{
var listEmpty = new List(80);
listEmpty.AddEmptyCondition(27);
listEmpty.Find(); // Это все объекты обл.80 в пустым атр.27
//==========Добавление нового условия=========
var list34 = new List(80);
list2734.AddCondition(34, 925711026); 
list2734.Find();
listEmpty.Delete(list2734);
var list5 = Application.GetCurrentList();
list5.Find(listEmpty);
if(list5.Size > 0) new DocFolder ("Атр 27 пуст", true, null, list5, 80, null, true);

}

{
var listEmpty9 = new List(80);
listEmpty9.AddEmptyCondition(9);
listEmpty9.Find(); // Это все объекты обл.80 в пустым атр.9

var listFold = Application.GetCurrentList();
listFold.Find(listEmpty9);
if(listFold.Size > 0) new DocFolder ("Атр 9 пуст", true, null, listFold, 80, null, true);
}

{
var listEmpty908 = new List(80);
listEmpty908.AddEmptyCondition(908);
listEmpty908.Find(); // Это все объекты обл.80 в пустым атр.908

var listFold908 = Application.GetCurrentList();
listFold908.Find(listEmpty908);
if(listFold908.Size > 0) new DocFolder ("Атр 908 пуст", true, null, listFold908, 80, null, true);
}

{
var list2 = new List(80);
var list3 = new List(80);
list2.AddCondition(2, 925797001);
list2.Find();
list3.AddCondition(2, 926000001);
list3.Find();
list2.Add(list3);

var list = Application.GetCurrentList();
list.Find(list2);

var list9 = new List(80);
var arr9 = new Array(896934498,925700003,925700013,925700030,925700047,
925700061,925700077,925700087,925700109,925700178,
925700189,925700198,925700224,925700244,925700298,
925700364,925700395,925700459,925700526,925700621,
925700707,925700733,925700787,925700806,925700809,
925700831,925701143,925701208,925701415,925701453,
925701915,925702329,925702478,925703259,925706795,
925707951,925715607,926000215,926000216,926000217,
926000218,926000219,926000220,926000221,926000222,
926000223,926000224,926000225,926000226);

for(i in arr9){
        doc = arr9[i];
        list9.AddCondition(9,doc);}
list9.Find();
list.Delete(list9);

var list34 = new List(80);
list34.AddCondition(34, 925711026);
list34.Find();
list.Delete(list34);
if(list.Size > 0) new DocFolder ("Нарушена иерархия ", true, null, list, 80, null, true);

var listName = new List(80);
listName.AddEmptyCondition(1);
listName.Find();
list.Find(listName);
if(list.Size > 0) new DocFolder ("Нарушена иерархия, объекты без названия ", true, null, list, 80, null, true);



}







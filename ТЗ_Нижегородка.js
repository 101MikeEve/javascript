


Строка меню и подсказка: ТЗ_Нижегородка
Строка состояния:
Идентификатор справки:
Позиция в меню: 3
Приоритет: 1


          


// 04.07.2023 - добавление диалогового окна с возможностью выбора какую именно папку создавать (Ивлев М.А)
 try{
  var lib = new Document(1944980003);
  lib.Execute(3);
  var lib2 = new Document(1910100005);
  lib2.Execute(3);
  var lib3 = new Document(1910100060);
  lib3.Execute(3);
  var lib = new Document(1910100005);
  lib.Execute(3);
  var docBibl1 = new Document(999900014);
  docBibl1.Execute(3);
 }  catch(...){
    Alert("Не удалось подключить библиотеки скриптов");
    return;
 }

listAllDoc = new List(1);
listSelect = Application.GetCurrentList();
atrsArray = new Array();

// Создание диалогового окна с кнопками
dlg = new Dialog("Создать папки с объктами");
dlg.reshape(10,10,600,200);

bznach = new Button("Значимости", true);
bznach.reshape(100,85,100,30);
bznach.handleEvent = f_1; 
dlg.add(bznach);

binf = new Button("Информационная строка", false);
binf.reshape(280,85,300,30);
binf.handleEvent = f_2; 
dlg.add(binf);
dlg.show();

 
    
//===Создание папок со Значимостью и наполнение объектами в зависимости от значимости атрибута 27 =============
function f_1(){
listAllDoc = new List(1);
listAllDoc.AddCondition (27, 499045752);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27- 499045752 - Широкие таблицы/рисунки ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 542617212);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 542617212 ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 944917884);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 944917884 - Последняя редакция ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 537905094);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 537905094 - Важный региональный документ 1 категории ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 499037697);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 499037697 - Автоматическое обновление Vdoc ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 902338527);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 902338527 - Важный региональный документ 4 категории ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 902338526);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 902338526 - Важный региональный документ 3 категории ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980116);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 1944980116 - Новый в оперативку ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980117);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 1944980117 - Измененный в оперативку ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980118);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 1944980118 - Скрытый в оперативку ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980119);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("Значимость - атрибут 27 - 1944980119 - Стандартное закрытие ", true, null, listAllDoc, 1, null, true);}
//=========Вторая папка===========/
function f_2(){

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Дополнительную информацию см. в ярлыке "Примечания"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Дополнительную информацию см. в ярлыке "Примечания"', true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! В текст документа внесено примечание')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! В текст документа внесено примечание" ', true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Документ недействующий')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Документ недействующий ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Действие документа приостановлено')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Действие документа приостановлено ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Документ в силу не вступил')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Документ в силу не вступил ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Документ вступил в силу')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Документ вступил в силу ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Об изменениях документа см. ярлык "Оперативная информация"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Об изменениях документа см. ярлык "Оперативная информация" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Документ отменяется! См. ярлык "Оперативная информация"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Документ отменяется! См. ярлык "Оперативная информация"', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Действие документа приостановлено. См. ярлык "Примечание"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Действие документа приостановлено. См. ярлык "Примечание" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Документ имеет особый порядок вступления в силу. См. ярлык "Примечания"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Документ имеет особый порядок вступления в силу. См. ярлык "Примечания" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! О порядке применения документа см. ярлык "Примечания"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! О порядке применения документа см. ярлык "Примечания"', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Документ с изменениями и дополнениями (новая редакция). О последующих изменениях см. ярлык "Оперативная информация"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Документ с изменениями и дополнениями (новая редакция). О последующих изменениях см. ярлык "Оперативная информация" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Документ с изменениями и дополнениями (новая редакция)')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Документ с изменениями и дополнениями (новая редакция) ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Данная редакция документа не действует')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Данная редакция документа не действует ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, 'Внимание! Данная редакция документа не действует')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('Инф. строка - атрибут 26 - Внимание! Данная редакция документа не действует ', true, null, listAllDoc, 1, null, true);

}









������ ���� � ���������: (�������) �������� �������� 2 � ��������
������ ���������:
������������� �������:
������� � ����: 3
���������: 1


          


try{
  var lib = new Document(1910100005);
  lib.Execute(3);
  var lib3 = new Document(1944980003);
  lib3.Execute(3);
 } catch(...){
    Alert("�� ������� ���������� ���������� ��������");
    return;
 }
{
var list1 = Application.GetCurrentList();

if(list1.Size > 0) new DocFolder ("��� ������������ ���������", true, null, list1, 2, null, true);

list1.AddEmptyCondition(2)
 
if(list1.Size > 0) new DocFolder ("��� 2 ����", true, null, list1, 2, null, true);
}





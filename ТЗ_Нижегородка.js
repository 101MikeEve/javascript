


������ ���� � ���������: ��_�����������
������ ���������:
������������� �������:
������� � ����: 3
���������: 1


          


// 04.07.2023 - ���������� ����������� ���� � ������������ ������ ����� ������ ����� ��������� (����� �.�)
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
    Alert("�� ������� ���������� ���������� ��������");
    return;
 }

listAllDoc = new List(1);
listSelect = Application.GetCurrentList();
atrsArray = new Array();

// �������� ����������� ���� � ��������
dlg = new Dialog("������� ����� � ��������");
dlg.reshape(10,10,600,200);

bznach = new Button("����������", true);
bznach.reshape(100,85,100,30);
bznach.handleEvent = f_1; 
dlg.add(bznach);

binf = new Button("�������������� ������", false);
binf.reshape(280,85,300,30);
binf.handleEvent = f_2; 
dlg.add(binf);
dlg.show();

 
    
//===�������� ����� �� ����������� � ���������� ��������� � ����������� �� ���������� �������� 27 =============
function f_1(){
listAllDoc = new List(1);
listAllDoc.AddCondition (27, 499045752);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27- 499045752 - ������� �������/������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 542617212);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 542617212 ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 944917884);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 944917884 - ��������� �������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 537905094);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 537905094 - ������ ������������ �������� 1 ��������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 499037697);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 499037697 - �������������� ���������� Vdoc ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 902338527);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 902338527 - ������ ������������ �������� 4 ��������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 902338526);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 902338526 - ������ ������������ �������� 3 ��������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980116);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 1944980116 - ����� � ���������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980117);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 1944980117 - ���������� � ���������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980118);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 1944980118 - ������� � ���������� ", true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (27, 1944980119);
listAllDoc.Find(listSelect);
if(listAllDoc.Size > 0) new DocFolder ("���������� - ������� 27 - 1944980119 - ����������� �������� ", true, null, listAllDoc, 1, null, true);}
//=========������ �����===========/
function f_2(){

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������������� ���������� ��. � ������ "����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������������� ���������� ��. � ������ "����������"', true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! � ����� ��������� ������� ����������')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! � ����� ��������� ������� ����������" ', true, null, listAllDoc, 1, null, true);

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� �������������')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� ������������� ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� ��������� ��������������')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� ��������� �������������� ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� � ���� �� �������')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� � ���� �� ������� ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� ������� � ����')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� ������� � ���� ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �� ���������� ��������� ��. ����� "����������� ����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �� ���������� ��������� ��. ����� "����������� ����������" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� ����������! ��. ����� "����������� ����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� ����������! ��. ����� "����������� ����������"', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� ��������� ��������������. ��. ����� "����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� ��������� ��������������. ��. ����� "����������" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� ����� ������ ������� ���������� � ����. ��. ����� "����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� ����� ������ ������� ���������� � ����. ��. ����� "����������" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! � ������� ���������� ��������� ��. ����� "����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! � ������� ���������� ��������� ��. ����� "����������"', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! �������� � ����������� � ������������ (����� ��������). � ����������� ���������� ��. ����� "����������� ����������"')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! �������� � ����������� � ������������ (����� ��������). � ����������� ���������� ��. ����� "����������� ����������" ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '�������� � ����������� � ������������ (����� ��������)')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - �������� � ����������� � ������������ (����� ��������) ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! ������ �������� ��������� �� ���������')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! ������ �������� ��������� �� ��������� ', true, null, listAllDoc, 1, null, true); 

listAllDoc = new List(1);
listAllDoc.AddCondition (26, '��������! ������ �������� ��������� �� ���������')
listAllDoc.Find(listSelect)
if(listAllDoc.Size > 0) new DocFolder ('���. ������ - ������� 26 - ��������! ������ �������� ��������� �� ��������� ', true, null, listAllDoc, 1, null, true);

}






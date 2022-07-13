import 'dog.dart';

void main(List<String> args) {
  Future httpResponseBody = new Future(() {
    return 'OK';
  });

  httpResponseBody.then((value) => print(value));
  print("sssssssssss");
  Future My = new Future(Myfun);
  print("");
  My.then((value) => print(value));
  dog d = new dog(18, 'huang');
  print(d.getAge);
  person p = new person(18, 'ouou');
  p.getInfo();
}

class person {
  var age = 10;
  var name = 'Su';
  void getInfo() {
    print("age=$age,name=$name");
  }

  person(this.age, this.name) {}
}

String Myfun() {
  return "sss";
}

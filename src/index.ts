function log(target: Foo) {
  console.log(target);
  console.log("Olha eu aqui!");
}

@log
class Foo {}

for (let i=3D1; i < 100; i++) {
  if (i % 3 =3D=3D=3D 0 && i % 5 =3D=3D=3D 0) {
     console.log("FizzBuzz");
  } else if (i % 3 =3D=3D=3D 0) {
     console.log("Fizz");
  } else if (i % 5 =3D=3D=3D 0) {
     console.log("Buzz");
  } else {
     console.log(i);
  }
}

/*
              outputs:
              1
              2
              Fizz
              4
              Buzz
              Fizz
              7
              8
              Fizz
              Buzz
              11
              Fizz
              13
              14
              FizzBuzz
*/



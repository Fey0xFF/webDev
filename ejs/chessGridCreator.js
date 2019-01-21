function createGrid(size) {
  let pattern =3D [" ", "#"];
  let lineOne =3D "";
  let lineTwo =3D "";
  let i =3D 0;
  for (let x =3D 0; x < size; x++) {
    lineOne +=3D pattern[i];
    i =3D=3D=3D 1 ? i =3D 0 : i++;
  }
  i =3D 1;
  for (let x =3D 0; x < size; x++) {
    lineTwo +=3D pattern[i];
    i =3D=3D=3D 1 ? i =3D 0 : i++;
  }
  i =3D 0;
  for (let x =3D 0; x < size; x++) {
    if (i =3D=3D=3D 1) {
      console.log(lineTwo);
      i--;
    } else if (i =3D=3D=3D 0) {
      console.log(lineOne);
      i++;
   }
  }
}
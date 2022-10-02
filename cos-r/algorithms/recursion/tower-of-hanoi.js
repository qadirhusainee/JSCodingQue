// #MEDIUM

const towerOfHanoi = (n, fromRod, toRod, auxRod) => {
  if (n === 1) {
    console.log(`Moving disk 1 from ${fromRod} to ${toRod}`);
  } else {
    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Moving disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
  }
};

towerOfHanoi(4, "X", "Y", "Z");

/*
For n = 2,
Moving disk 1 from X to Z
Moving disk 2 from X to Y
Moving disk 1 from Z to Y
*/

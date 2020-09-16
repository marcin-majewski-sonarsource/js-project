class A {
  private _x: number = 0;
  private y: number = 0;

  public get x() {  // Noncompliant: field 'x' is not used in the return value
    return this.y;
  }

  public setX(val: number) { // Noncompliant: field 'x' is not updated
    this.y = val;
  }

  public getY() { // Noncompliant: field 'y' is not used in the return value
    return this.x;
  }
}

function getLength(a, b, c) {
  const strings = [];  // Noncompliant
  strings.push(a);
  strings.push(b);
  strings.push(c);

  return a.length + b.length + c.length;
}

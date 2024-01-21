export function backspaceCompare(t: string, s: string): boolean {
  const [tTyped, sTyped] = [getTypedChars(t), getTypedChars(s)];
  if (tTyped.length !== sTyped.length) return false;

  for (let i = 0; i < tTyped.length; i++) {
    if (tTyped[i] !== sTyped[i]) return false;
  }
  return true;
}

export function backspaceCompareTotalUnit(t: string, s: string): boolean {
  let tPointer = t.length - 1;
  let sPointer = s.length - 1;

  while (tPointer >= 0 && sPointer >= 0) {
    const tChar = t[tPointer];
    const sChar = s[sPointer];
    if (tChar === '#' || sChar === '#') {
      if (tChar === '#') tPointer = decrementPointer(tPointer, t);
      if (sChar === '#') sPointer = decrementPointer(sPointer, s);
    } else if (tChar === sChar) {
      tPointer--;
      sPointer--;
    } else {
      return false;
    }
  }
  return true;
}

function decrementPointer(pointer: number, string: string): number {
  let jumpAmount = 2;

  while (jumpAmount > 0) {
    jumpAmount--;
    pointer--;
    if (string[pointer] === '#') {
      jumpAmount += 2;
    }
  }
  return pointer;
}

function getTypedChars(str: string) {
  let typed = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '#') {
      typed = typed.slice(0, -1);
    } else {
      typed += char;
    }
  }
  return typed;
}

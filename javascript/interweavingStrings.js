//time - O(2 ^ (n + m))
//space - O(n + m)
//the time complexity of this problem is tricky

function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) return false;
  return areInterwoven(one, two, three, 0, 0);
}

function areInterwoven(one, two, three, i, j) {
  let k = i + j;

  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    if (areInterwoven(one, two, three, i + 1, j)) return true;
  }

  if (j < two.length && two[j] === three[k]) {
    if (areInterwoven(one, two, three, i, j + 1)) return true;
  }

  return false;
}


//O(nm) time
//O(nm) space
function interweavingStrings(one, two, three) {
	if(three.length !== one.length + two.length) return false;
	const cache = new Array(one.length + 1).fill(0).map(val => new Array(two.length + 1).fill(null));
	return areInterwoven(one, two, three, 0, 0, cache);
}

function areInterwoven(one, two, three, i, j, cache) {
	if(cache[i][j] !== null) {
		return cache[i][j]
	}
	
	let k = i + j;
	
	if(k === three.length) return true;
	
	if(i < one.length && one[i] === three[k]) {
		cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
		if(cache[i][j]) return true;
	}
	
	if(j < two.length && two[j] === three[k]) {
		cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache);
		if(cache[i][j]) return true;
	}
	
	cache[i][j] = false;
	return false;
}




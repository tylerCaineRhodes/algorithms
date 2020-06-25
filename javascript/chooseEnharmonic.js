const choosePitch = () => {
  let selection = ['A','A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G'];
  let thirdsSelect = selection.concat(selection);
  let triads = new Map();
  for(let note in thirdsSelect){
    if(triads.has(note)) return;
    

  }


  let randomSelect = ~~(Math.random() * ~~(selection.length));
  console.log(selection[randomSelect]);

  return;
};

choosePitch();

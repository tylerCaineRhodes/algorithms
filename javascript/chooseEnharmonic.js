const choosePitch = () => {
  const selection = ['A','A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G'];

  let randomSelect = ~~(Math.random() * ~~(selection.length));
  console.log(selection[randomSelect]);

  return;
};

choosePitch();

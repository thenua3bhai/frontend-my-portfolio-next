export const fetchExperiences = async () => {
  const res =
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences
  `);

  const data = await res.json();
  const experiences = data.experiences;
  return experiences;
};
//sbke liye itna sara ek staticprops m se next backend api ko call krne ka code wahi likhne se acha wha function call kiya kewal and code sbka alg in utils m bna diya in sare function ko ek util file m bhi rkh skte the but ek m rkh diya jesa this lge..
//pura code next se backenbd ko call krne ka yha in utils m likha h function bna ke whay import kkre just call ki line likh rhe and wah se ye execute ho rha h,data lake de rha h and next ka backend sanity se data lake de rha h..abhi to localhost ke sanity studio se..
//localhost ke sanity studio p change kiya to yha turant reflect hua,ie ye data abhi localhost wale se aa rha h ...kha decided h pta nhi but aa rha h
//so cloud ke studio se data kese layenge and isse local se kese update rkhna h sync pta lgana bad m ??

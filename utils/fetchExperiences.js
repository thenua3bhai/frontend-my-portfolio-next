export const fetchExperiences = async () => {
  const res =
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences
  `);

  const data = await res.json();
  const experiences = data.experiences;
  return experiences;
};

//added new env variables in vercel [production acc. to production from there it will fetch there our local env file stay only here

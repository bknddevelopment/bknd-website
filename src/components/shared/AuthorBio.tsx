interface AuthorBioProps {
  name: string;
  date: string;
  readingTime: number;
}

export function AuthorBio({ name, date, readingTime }: AuthorBioProps) {
  return (
    <p className="text-sm text-[#86868B]">
      By {name}
      <span className="mx-2">|</span>
      {date}
      <span className="mx-2">|</span>
      {readingTime} min read
    </p>
  );
}

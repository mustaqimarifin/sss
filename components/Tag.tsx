import Link from 'next/link';
import Label from './Label';

export default function Tag({ tags }) {
  return (
    <div>
      {tags?.length &&
        tags.slice(0).map((tag, index) => (
          <Link href="#" key={index}>
            <a>
              <Label color={tag.color}>{tag.title}</Label>
            </a>
          </Link>
        ))}
    </div>
  );
}

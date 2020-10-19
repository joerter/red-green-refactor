import Link from 'next/link';
import tagStyles from './tags.module.css';

export default function Tags({ tags }: { tags: string[] }) {
    const tagList = tags.map((t) => (
        <Link href="/" key={t}>
            <a className={tagStyles.tag}>#{t}</a>
        </Link>
    ));

    return (
        <div>
            <small>{tagList}</small>
        </div>
    );
}

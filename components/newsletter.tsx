import { newsletterForm } from '../lib/convert-kit';

export default function Newsletter() {
    return (
        <div>
            <h2>
                Want to be notified about my next post? Join the newsletter!
            </h2>
            <div>
                <div dangerouslySetInnerHTML={{ __html: newsletterForm }}></div>
            </div>
        </div>
    );
}

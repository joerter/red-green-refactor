import { useEffect } from 'react';

export default function Newsletter() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unique-creator-4815.ck.page/6b6b63168f/index.js';
        script.async = true;
        script.setAttribute('data-uid', '6b6b63168f');

        const mountPoint = document.getElementById('signup');
        mountPoint.appendChild(script);
    });

    return (
        <div>
            <h2>
                Want to be notified about my next post? Join the newsletter!
            </h2>
            <div id="signup"></div>
        </div>
    );
}

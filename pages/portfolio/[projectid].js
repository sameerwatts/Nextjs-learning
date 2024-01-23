import {useRouter} from 'next/router';

const PortfolioProjectPage = () => {

    const router = useRouter();

    console.log('router.pathname',router.pathname);
    console.log('router.query',router.query);
    return (
        <div>
            <h1>The Portfolio Project page</h1>
        </div>
    );
};

export default PortfolioProjectPage;
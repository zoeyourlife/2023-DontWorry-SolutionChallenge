import React from 'react';
import { useRouter } from 'next/router';
function Detail() {
    const route = useRouter();
    return <div>Detail,{route.query.month}</div>;
}

export default Detail;

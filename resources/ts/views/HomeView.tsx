import React from 'react';
import {Link} from "react-router-dom";

function HomeView() {
    return (
        <div>
            Home Page<br />
            <Link to={'/example'}>Exampleへ遷移</Link><br />
            <Link to={'/hoge/fuga'}>存在しないパス/hoge/fugaへ遷移</Link>
        </div>
    );
}

export default HomeView;
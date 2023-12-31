import { useState } from "react";
import BlogList from "./blogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum ...' , author: 'mario' , id: 1},
        {title: 'welcome party', body: 'lorem ipsum ...' , author: 'yorsi' , id: 2},
        {title: 'web dev top tips', body: 'lorem ipsum ...' , author: 'manha' , id: 3}
    ]);


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"></BlogList>
        </div>
     );
}
 
export default Home;
import Banner from "../AppliedJobs/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner/>
            <CategoryList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;
import PropTypes from "prop-types";
import { SlCheck } from "react-icons/sl";


const Feature = ({feature}) =>{

    

    return (
        <div>
            <p className="flex items-center"> <SlCheck className="text-green-900 mr-2" /> {feature}</p>
        </div>
    );
};
Feature.PropTypes = {
    feature: PropTypes.string
}

export default Feature;
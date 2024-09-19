import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) =>{

    const {type, price, features} = option;

    return (
        <div className="shadow-md rounded-md p-8 flex flex-col">
            <h2>
                <span className="text-5xl">$</span>
                <span className="text-5xl">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl py-2">{type} Membership</h4>
            <div className="flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="btn bg-green-300 w-full font-bold hover:bg-transparent">Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option: PropTypes.object
}

export default PriceOption;


const PriceOptions = () => {

    
        priceOptions = [
            {
                "id": "001",
                "type": "Basic",
                "price": 29.99,
                "features": [
                    "Access to gym equipment",
                    "Group classes",
                    "Locker room facilities"
                ]
            },
            {
                "id": "002",
                "type": "Standard",
                "price": 49.99,
                "features": [
                    "Access to gym equipment",
                    "Group classes",
                    "Locker room facilities",
                    "Personal training sessions (2/month)",
                    "Discount on nutrition consultations"
                ]
            },
            {
                "id": "003",
                "type": "Premium",
                "price": 79.99,
                "features": [
                    "Access to gym equipment",
                    "Unlimited group classes",
                    "Locker room facilities",
                    "Personal training sessions (4/month)",
                    "Nutrition consultations",
                    "Access to premium facilities (sauna, pool)"
                ]
            },
            {
                "id": "004",
                "type": "Student",
                "price": 19.99,
                "features": [
                    "Access to gym equipment",
                    "Group classes",
                    "Locker room facilities",
                    "Student discounts on personal training"
                ]
            },
            {
                "id": "005",
                "type": "Family",
                "price": 99.99,
                "features": [
                    "Access to gym equipment for 2 adults and 2 children",
                    "Unlimited group classes for all members",
                    "Locker room facilities",
                    "Personal training sessions (3/month)",
                    "Family fitness events"
                ]
            }
        ];
    




    return (
        <div>
            <h2 className="text">Best Prices in town</h2>
            {
                priceOptions.map(Option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
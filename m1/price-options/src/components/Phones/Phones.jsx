import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'


const Phones = () => {

    const [phones, setPhones] = useState([]) // 1st step - data 
    const [loading, setLoading] = useState(true)

    useEffect(() => {    // 2nd step - data fetch

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => setPhones(data.data.data))
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData)
                setLoading(false);
            });

        // OR

        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

    }, [])





    return (
        <div>
            {loading && <div>
                <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />

            </div>}
            <div className="flex items-center justify-center">
                <h1 className="text-3xl">Total phone data:</h1>
                <h2 className="text-5xl">{phones.length}</h2>   {/*  // step 3 - data fetch  */}
            </div>
            <div className="align-items-center">
                <BarChart width={1200} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>

            </div>
        </div>
    );
};

export default Phones;
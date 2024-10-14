import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () =>{

    const [money, setMoney] = useContext(MoneyContext);

    const gift = useContext(AssetContext);

    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Mamshad'}>
                    <p>has: {gift}</p>
                </Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;
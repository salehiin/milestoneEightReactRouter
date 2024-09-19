
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';



const LineChart = () => {

    const subjectMarks = [
        { "id": 1, "name": "Alice", "math": 78, "physics": 85, "chemistry": 80 },
        { "id": 2, "name": "Bob", "math": 85, "physics": 88, "chemistry": 82 },
        { "id": 3, "name": "Charlie", "math": 90, "physics": 92, "chemistry": 89 },
        { "id": 4, "name": "David", "math": 70, "physics": 75, "chemistry": 78 },
        { "id": 5, "name": "Eva", "math": 88, "physics": 90, "chemistry": 86 },
        { "id": 6, "name": "Frank", "math": 92, "physics": 95, "chemistry": 94 },
        { "id": 7, "name": "Grace", "math": 76, "physics": 80, "chemistry": 74 },
        { "id": 8, "name": "Hannah", "math": 84, "physics": 86, "chemistry": 88 },
        { "id": 9, "name": "Isaac", "math": 91, "physics": 90, "chemistry": 92 },
        { "id": 10, "name": "Jack", "math": 87, "physics": 85, "chemistry": 83 }
    ];



    return (
        <div>
            <LChart width={800} height={400} data={subjectMarks}>
                <XAxis dataKey={'nmae'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey="physics" stroke='red'></Line>
                <Line dataKey={"chemistry"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
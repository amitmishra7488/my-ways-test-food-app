import {Routes, Route} from 'react-router-dom'
import FoodForm from '../components/FoodForm'
import FoodItem from '../components/FoodItem'







export default function AllRoutes() {
    
    return (
        <Routes>
            <Route path="/" element={<FoodForm />} />
            <Route path="/foodItem" element={<FoodItem />} />
            <Route path="*" element={<FoodForm />} />
        </Routes>
    )
}
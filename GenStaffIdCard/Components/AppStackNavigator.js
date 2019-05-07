import Home from './Home/Home'
import Splash from './Splash'
import ImageTakePicture from './image/ImageTakePicture'
import TakePicture from './TakePicture/TakePicture'
import InputInfo from './InputInfo/InputInfo'
import VisitingInfo from './InputInfo/VisitingInfo'
import VisitingCard from './VisitingCard'
import {createStackNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
    //screen
    Splash: {
        screen: Splash
    },
    Home: {
        screen: Home
    },
    ImageTakePicture: {
        screen: ImageTakePicture
    },
    TakePicture: {
        screen: TakePicture
    },
    InputInfo: {
        screen: InputInfo
    },
    VisitingInfo: {
        screen: VisitingInfo
    },
    VisitingCard: {
        screen: VisitingCard
    }
    }, {
    //setting
    initialRouteName: 'Splash'
})
export default createAppContainer(AppNavigator)
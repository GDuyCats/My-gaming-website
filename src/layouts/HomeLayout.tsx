
import { Outlet } from 'react-router-dom';
import HomeHeaderLayout from './HomeHeaderLayout';
function HomeLayout() {
    return (
        <div className='w-screen min-h-screen'>
            <div className='flex w-screen h-[60px] items-center gap-10 justify-start bg-black pl-10'>
                <HomeHeaderLayout title='CH40Ss'isDropDown = {false}/>
                <HomeHeaderLayout title='Games' isDropDown/>
                <HomeHeaderLayout title='Shop' isDropDown/>
                <HomeHeaderLayout title='News' isDropDown = {false}/>
                <HomeHeaderLayout title='Support' isDropDown = {false}/>
                <HomeHeaderLayout title='Community' isDropDown = {false}/>
            </div>
            <Outlet />
        </div>
    )
}

export default HomeLayout

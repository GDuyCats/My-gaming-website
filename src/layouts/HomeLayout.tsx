
import { Outlet } from 'react-router-dom';
import HomeHeaderLayout from './HomeHeaderLayout';
import Logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
function HomeLayout() {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen pt-[60px]'>
            <div className='fixed top-0 flex flex-col w-screen h-[60px] items-center '>
                <div className='fixed z-50 w-screen'>
                    <div className='flex -mr-[5px] justify-end'>
                        <div className='w-[200px] h-[10px] bg-cyan-500 skew-x-[45deg]'></div>
                        <div className='w-[200px] h-[10px] bg-blue-500 skew-x-[45deg]'></div>
                        <div className='w-[200px] h-[10px] bg-amber-500 skew-x-[45deg]'></div>
                        <div className='w-[200px] h-[10px] bg-red-500 skew-x-[45deg]'></div>
                    </div>
                </div>
                <div className='flex items-center justify-start w-screen gap-10 pl-10 bg-black h-[60px]'>
                    <img src={Logo} alt='Logo' className='w-[40px] h-[40px] rounded-3xl cursor-pointer' onClick={() => navigate('/')} />
                    <HomeHeaderLayout title='Games' isDropDown />
                    <HomeHeaderLayout title='Shop' isDropDown />
                    <HomeHeaderLayout title='News' isDropDown={false} />
                    <HomeHeaderLayout title='Support' isDropDown={false} />
                    <HomeHeaderLayout title='Community' isDropDown={false} />
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default HomeLayout

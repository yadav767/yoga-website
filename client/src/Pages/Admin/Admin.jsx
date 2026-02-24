import { useNavigate } from "react-router-dom"
import { Tabs } from 'antd';
import { useSelector } from "react-redux";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperience from "./AdminExperience";
import AdminNutrition from "./AdminNutrition";
import AdminBlog from "./AdminBlog";
import AdminTechnique from "./AdminTechnique";
import AdminStory from "./AdminStory";

import "../../Pages/Admin.css"
import AdminPrice from "./AdminPrice";
import AdminUserData from "./AdminUserData";


const Admin = () => {
    const navigate = useNavigate()
    const { data } = useSelector((state) => state.root)


    const items = [
        {
            key: "1",
            label: "Intros",
            children: <AdminIntro />,
        },
        {
            key: "2",
            label: "Abouts",
            children: <AdminAbout />,
        },
        {
            key: "3",
            label: "Story",
            children: <AdminStory />,
        },
        {
            key: "4",
            label: "Technique",
            children: <AdminTechnique />,
        },
        {
            key: "5",
            label: "Nutrition",
            children: <AdminNutrition />,
        },
        {
            key: "6",
            label: "Blog",
            children: <AdminBlog />,
        },
        {
            key: "7",
            label: "Experience",
            children: <AdminExperience />,
        },
        {
            key: "8",
            label: "Pricing",
            children: <AdminPrice />,
        }
        ,
        {
            key: "9",
            label: "Users",
            children: <AdminUserData />,
        }

    ];



    return (
        <div className="mt-3 px-8">
            <div className='flex mt-2 justify-between  items-center  gap-10 '>
                <div className='text-3xl text-black font-semibold'>
                    Yoga Admin
                </div>
                <button className='px-5  py-2 bg-gray-300 active:scale-95 transition-all rounded cursor-pointer active:scale-95 border border-gray-700 px-4 py-2 transition-all text-xl text-black' onClick={() => navigate("/")}>Logout</button>
            </div>

            {data && (
                <div className=' text-xl pb-20 p-2 px-11 max-sm:px-2'>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
            )}
        </div>
    )
}

export default Admin
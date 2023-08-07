import { createBrowserRouter } from "react-router-dom";
import Main from "../body/Main";
import Content from "../body/Content";
import Watch from "../watch/Watch";
import Shorts from "../Shorts";
import Subscription from "../sidebar/Subscription";
import Todolist from "../todolist/todolist";

export const appRouter = createBrowserRouter([
    {
        'path':'/',
        'element':<Main/>,
        'children':[{
            'path':"/",
            'element':<Content/>,
         
        },
        {
            "path":"/watch",
            'element':<Watch/>,
        },{
            'path':'/shorts',
            'element':<Shorts/>
        },{
            "path":"/subscriptions",
            "element":<Subscription/>
        },{
            "path":"/todo",
            "element":<Todolist/>
        }
            
        ]

    }
])
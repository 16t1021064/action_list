import AdminHomePage from "../containers/AdminHomePage";
import TaskBoard from "../containers/TaskBoard";

export const API_ENDPOINT = 'http://localhost:3000'

export const STATUSES = [
    {
        value: 0,
        label: 'READY'
    },
    {
        value: 1,
        label: 'INPROGRESS'
    },
    {
        value: 2,
        label: 'COMPLETED'
    },
]
export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 201
}
export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang quản trị',
        exact: true,
        component: AdminHomePage
    },
    {
        path: '/task-board',
        name: 'Quản lý công việc',
        component: TaskBoard,
    },
];

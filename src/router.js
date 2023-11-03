import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {postService} from "./services/postService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostDetailPage} from "./pages/PostDetailPage";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/user-details/:userId', element: <UserDetailsPage/>, children:[
                    {path: ':userId', element: <PostsPage/>, loader: ({params:{userId}})=>postService.getByUserId(userId)}
                ]},
            {path: 'users/user-details/:userId/:userId/post-details/:postId', element: <PostDetailPage/>, loader: ({params:{postId}})=>postService.getByPostId(postId)}

        ]
    }
]);

export {router}
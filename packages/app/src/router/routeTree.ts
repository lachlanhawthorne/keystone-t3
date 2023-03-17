import { rootRoute } from './routes/__root'
import { indexRoute } from './routes/index'
import { postsRoute } from './routes/posts'
import { postsIndexRoute } from './routes/posts/index'
import { postIdRoute } from './routes/posts/$postId'
import { pageRoute } from './routes/$page'

export const routeTree = rootRoute.addChildren([
  indexRoute,
  postsRoute.addChildren([
    postsIndexRoute, 
    postIdRoute
  ]),
  pageRoute
])
import loadable from '@loadable/component';
import { Loader } from 'common/components/Loader';
import { MainLayout } from 'common/components/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';

const WelcomePage = loadable(() => import('./pages/WelcomePage/WelcomePage'), { fallback: <Loader /> });
const PostsPage = loadable(() => import('./pages/PostsPage/PostsPage'), { fallback: <Loader /> });
const PostPage = loadable(() => import('./pages/PostPage/PostPage'), { fallback: <Loader /> });
const AlbumsPage = loadable(() => import('./pages/AlbumsPage/AlbumsPage'), { fallback: <Loader /> });
const GalleryPage = loadable(() => import('./pages/GalleryPage/GalleryPage'), { fallback: <Loader /> });
const AboutPage = loadable(() => import('./pages/AboutPage/AboutPage'), { fallback: <Loader /> });
const NotFound404Page = loadable(() => import('./pages/NotFound404Page'), { fallback: <Loader /> });

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="welcome" />} />
        <Route path="welcome" element={<WelcomePage />} />

        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />

        <Route path="albums" element={<AlbumsPage />} />
        <Route path="albums/:id" element={<GalleryPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="*" element={<NotFound404Page />} />
      </Route>
    </Routes>
  );
}

import React from "react";
import { About } from "./pages/about/About";
import { AboutProducts } from "./pages/AboutProducts/AboutProducts";
import Home from "./pages/home/Home";
import { Manifesto } from "./pages/Manifesto/Manifesto";
import { Story } from "./pages/story/Story";
import { Team } from "./pages/teams/Teams";

export const allRoutes = [
    {
        path: '/',
        Component: <Home />,
    },
    {
        path: '/about',
        Component: <About />,
    },
    {
        path: '/teams',
        Component: <Team />,
    },
    {
        path: '/Our-story',
        Component: <Story />,
    },
    {
        path: '/How-it-works',
        Component: <AboutProducts />,
    },
    {
        path: '/Manifesto',
        Component: <Manifesto />,
    },
    {
        path: '*',
        Component: <Home />,
    },
]
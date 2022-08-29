import React from "react";
import { About } from "./pages/about/About";
import { AboutProducts } from "./pages/AboutProducts/AboutProducts";
import Home from "./pages/home/Home";
import { Manifesto } from "./pages/Manifesto/Manifesto";
import { Subscribe } from "./pages/subscribe/Subscribe";
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
        path: '/our-story',
        Component: <Story />,
    },
    {
        path: '/how-it-works',
        Component: <AboutProducts />,
    },
    {
        path: '/manifesto',
        Component: <Manifesto />,
    }, {
        path: '/subscribe',
        Component: <Subscribe />
    },
    {
        path: '*',
        Component: <Home />,
    },
]
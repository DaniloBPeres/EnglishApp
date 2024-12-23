'use client';
import Image from 'next/image';
import { Navigation } from "../components/nav"
import { Card } from "../components/card";
import Link from "next/link";
import Particles from "../components/particles";

export default function MembersPage() {
    const team = [
        {
            name: "Danilo Peres",
            age: "22",
            short_description: "Anhembi Morumbi University",
            img_src: "/favicon.png",
            page_route:"members/1",
            position:"Information Systems"
        },
        {
            name: "Sara Milena",
            age: "22",
            short_description: "Anhembi Morumbi University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Law"
        },
        {
            name: "Larissa Santos",
            age: "22",
            short_description: "Anhembi Morumbi University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Biomedicine"
        },
        {
            name: "Lucas Moraes",
            age: "22",
            short_description: "São Judas University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Computer Sciences"
        },
        {
            name: "Adilson Santana",
            age: "22",
            short_description: "Anhembi Morumbi University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Information Systems"
        },
        {
            name: "Francisco Machado",
            age: "22",
            short_description: "Anhembi Morumbi University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Systems Analysis and Development"
        },
        {
            name: "Raquel Graziano",
            age: "22",
            short_description: "São Judas University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Law"
        },
        {
            name: "Cibele Aqueme",
            age: "22",
            short_description: "São Judas University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Law"
        },
        {
            name: "Marcus Carvalho",
            age: "22",
            short_description: "Anhembi Morumbi University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Biomedicine"
        },
        {
            name: "Gustavo Cunha",
            age: "22",
            short_description: "São Judas Tadeu University",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Mechanical Engineering"
        },
        {
            name: "Danilo Passos",
            age: "22",
            short_description: "UNISOCIESC",
            img_src: "/favicon.png",
            page_route:"/",
            position:"Information Systems"
        }
    ]
    return(
        <div className="bg-gradient-to-tl h-max from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="w-full mb-4 lg:mx-0">
                    <h2 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
                        Team
                    </h2>
                    <div className="w-full h-px bg-zinc-400 mt-0 md:mt-0 animate-fade-in duration-500"/>
                </div>
                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 animate-fade-in duration-500">
                    {
                        team.map((member) => (
                            <Card>
                                <Particles
                                    className="absolute inset-0 -z-10 animate-fade-in"
                                    quantity={100}
                                />
                                <Link href={member.page_route}>
                                    <article className="relative w-full h-full p-4 md:p-8">
                                        <div className="w-full flex mb-4">
                                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">{member.name}</h1>
                                        </div>
                                        <div className="w-full h-px bg-zinc-400 mt-0 md:mt-0 animate-fade-in duration-500"/>
                                        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">{member.position}</p>
                                        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                            {member.short_description}
                                        </p>
                                    </article>
                                </Link>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
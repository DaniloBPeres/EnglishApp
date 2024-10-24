'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Card } from "@/app/components/card";
import Particles from "@/app/components/particles";

export default function PersonPage(){
    const params = useParams();
    const id = parseInt(params?.id as string);

    const team = [
        {
            id: 1,
            name: "Danilo Peres",
            age: 22,
            img_src:"/favicon.png",
            position: "Full-Stack Developer",
            description: "I am a dedicated FullStack Software Engineer with four years of programming experience, including two years of professional expertise. I am passionate about coding, always striving to improve my skills and take on new challenges. My journey in software development reflects a commitment to continuous learning and delivering quality solutions. I have hands-on experience in mobile and web development using technologies like .NET (C#), Xamarin, Angular, PHP (Fatfree, Laravel), and PostgreSQL. I am a proactive team player, with a strong focus on building scalable systems, creating efficient APIs, and ensuring timely project delivery. I’m eager to apply my skills and passion to contribute to innovative projects and collaborate with dynamic teams."
        }
    ]

    const member = team[id - 1];

    return(
        <div className="bg-gradient-to-tl w-full justify-center flex h-screen from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14 max-[768px]:h-max">
            <Particles quantity={500} className="absolute inset-0 -z-10 animate-fade-in"/>
            <div className="w-1/2 mt-24 max-[768px]:w-full max-[768px]:p-4 max-[768px]:mt-4">
                <div className="w-full flex items-center">
                    <Link href="/members" className="duration-200 text-zinc-300 hover:text-zinc-100 mr-4">
                        <ArrowLeft className="w-6 h-6 " />
                    </Link>
                    <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">Member</h1>
                </div>
                <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                <div className="w-full flex items-center mb-8">
                    <div className="w-1/4 pr-2">
                        <Image src={member.img_src} width={500} height={500} alt="Member Image" className="rounded-full"/>
                    </div>
                    <div className="w-3/4">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">{member.name}</h1>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">{member.age} Years</p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">{member.position}</p>
                            </article>
                        </Card>
                    </div>
                </div>
                <div className="w-full">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">Apresentation</h1>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">{member.description}</p>
                        </article>
                    </Card>
                </div> 
            </div>
        </div>
    )
}
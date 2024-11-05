"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import Image from 'next/image';
import { ArrowRight } from "lucide-react";


export default function ProjectPage(){

    return(
        <div className="bg-gradient-to-tl flex items-start pt-24 justify-center h-full from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14">
            <Navigation />
            <div className="animate-fade-in flex flex-wrap align-center duration-200 w-9/12 h-full max-[768px]:w-full max-[768px]: p-4">
                <div className="w-full flex content-center items-center justify-between">
                    <h2 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
                        Digital Security
                    </h2>
                    <Link href="/project/threads"
                        className="duration-200 flex content-center items-center text-zinc-300 hover:text-zinc-100">
                            <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Threads</p>
                            <ArrowRight className="w-6 h-6 " />
                    </Link>
                </div>
                <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                <div className="w-full flex flex-wrap">
                    <div className="w-1/2 mb-6 flex max-[768px]:w-full">
                        <Image src="/iateste.jpg" width={600} height={250} alt="Ia Picture" className="rounded-xl"></Image>
                    </div>
                    <div className="w-1/2 mb-6 max-[768px]:w-full">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Digital security has become a highly relevant field of study in the current era, where everything is driven by technology. It enables the protection of data and financial information, application security, endpoint security, cloud security, and prevention of unauthorized access. The most common aspects of data protection include cyber threats, encryption, authentication and authorization, firewall and network monitoring, software security and patches, backups and disaster recovery, compliance and security policies, user education and awareness, and cloud security.
                                We can understand cyber threats as malicious activities aimed at compromising, damaging, or gaining unauthorized access to systems, networks, data, or digital devices. These threats can be conducted by individuals, groups, or even states, usually with the intent of data theft, service disruption, financial gain, or espionage.
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="w-full mb-6 max-[768px]:w-full">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Digital security has become essential in today’s internet-dependent world, protecting individuals and businesses from unauthorized access, identity theft, and fraud. Key areas include safeguarding personal data (like banking and medical information) and enabling safe online transactions. Cyber threats impact financial stability and reputation, making protective measures such as firewalls, encryption, and multi-factor authentication crucial. The target audience is broad, from individual internet users to banks and governments, each facing unique risks. Digital security, now a necessity, ensures data protection across sectors, requiring both preventive measures and public education to mitigate threats effectively.
                                </p>
                            </article>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
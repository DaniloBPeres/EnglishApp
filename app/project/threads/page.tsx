import { Card } from "@/app/components/card";
import { Navigation } from "@/app/components/nav";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function threadsPage(){
    
    return(
        <div className="bg-gradient-to-tl flex items-start pt-24 justify-center h-max from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14">
            <Navigation />
            <div className="w-9/12 max-[768px]:w-full flex flex-wrap justify-around">
                <div className="w-full flex content-center items-center justify-between">
                    <h2 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
                        Threats
                    </h2>
                    <Link href="/project/security"
                        className="duration-200 flex content-center items-center text-zinc-300 hover:text-zinc-100">
                            <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Security</p>
                            <ArrowRight className="w-6 h-6 " />
                    </Link>
                </div>
                <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                <div className="w-11/12 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <Image src="/threads.png" width={1500} height={300} alt="Ia Picture" className="rounded-xl"></Image>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Malware
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Malicious software designed to damage or compromise a system.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Spyware
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Spies on the user, collecting sensitive information such as passwords and banking data.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Phishing
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Attacks that attempt to trick users into revealing sensitive information, often through fraudulent emails that mimic trusted sources.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Denial-of-Service Attacks (DDoS)
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300"> Intentional overload of a service or network, making it inaccessible to legitimate users.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Social Engineering Attacks
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Techniques that exploit trust or human error to gain access to information or systems. This can include phone calls or messages pretending to be tech support or other authority figures.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-2/5 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Brute Force Attacks
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">Automated attempts to discover passwords by trying various combinations until the correct one is found.</p>
                        </article>
                    </Card>
                </div>
                <div className="w-11/12 mb-6 max-[768px]:w-1/2">
                    <Card>
                        <Link href="https://ieeexplore.ieee.org/abstract/document/7160662">
                        <article className="relative w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Botnet in DDoS Attacks: Trends and Challenges
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                Threats of distributed denial of service (DDoS) attacks have been increasing day-by-day due to rapid development of computer networks and associated infrastructure, and millions of software applications, large and small, addressing all varieties of tasks. Botnets pose a major threat to network security as they are widely used for many Internet crimes such as DDoS attacks, identity theft, email spamming, and click fraud. Botnet based DDoS attacks are catastrophic to the victim network as they can exhaust both network bandwidth and resources of the victim machine. This survey presents a comprehensive overview of DDoS attacks, their causes, types with a taxonomy, and technical details of various attack launching tools. A detailed discussion of several botnet architectures, tools developed using botnet architectures, and pros and cons analysis are also included. Furthermore, a list of important issues and research challenges is also reported.
                            </p>
                            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                HOQUE, Nazrul; BHATTACHARYYA, Dhruba K.; KALITA, Jugal K. Botnet in DDoS attacks: trends and challenges. IEEE Communications Surveys & Tutorials, v. 17, n. 4, p. 2242-2270, 2015.
                            </p>
                        </article>
                        </Link>
                    </Card>
                </div>
                <div className="w-1/2 mb-6 max-[768px]:w-full">
                    <Card>
                        <article className="relative flex flex-wrap content-center w-full h-full p-4 md:p-8">
                            <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display mb-4">
                                Phishing
                            </h1>
                            <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/C2q1WupfEV4?si=G_u2DLBG-rew3U2b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </article>
                    </Card>
                </div>
            </div>
        </div>
    )
}
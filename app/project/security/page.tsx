import { Card } from "@/app/components/card";
import { Navigation } from "@/app/components/nav";
import Image from "next/image";
import Link from "next/link";

export default function securityPage(){
    
    return(
        <div className="bg-gradient-to-tl flex items-start pt-24 justify-center h-max from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-14">
            <Navigation />
            <div className="animate-fade-in duration-200 w-9/12 max-[768px]:w-full max-[768px]: p-4">
                <div className="w-full">
                    <h2 className="py-3.5 px-0.5 z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-4xl whitespace-nowrap bg-clip-text ">
                        Threads
                    </h2>
                </div>
                <div className="w-full h-px bg-zinc-400 mt-0.5 mb-6"/>
                <div className="w-1/2 mb-6 max-[768px]:w-full">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h1 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    Encryption
                                </h1>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Encryption plays a crucial role in digital security, providing a foundation for data protection in various contexts, such as communications, online transactions, user authentication, and sensitive data storage. With the rise in cyber threats, encryption has become an essential tool for protecting privacy and ensuring information security. However, encryption security also depends on factors such as the strength of cryptographic keys (the longer and more complex the key, the harder it is to break) and the correct use of appropriate algorithms. Some of its functions are:
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="w-1/2 mb-6 flex justify-end max-[768px]:w-full">
                        <Image src="/iateste.jpg" width={650} height={500} alt="Ia Picture" className="rounded-xl"></Image>
                    </div>
                    <div className="mb-4 w-full">
                        <Card>
                            <Link href="/project/malware">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                        Confidentiality:
                                    </h1>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        Encryption prevents unauthorized third parties from reading the information. Only those who have the correct key can decrypt and access the data.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                    <div className="mb-4 w-full">
                        <Card>
                            <Link href="/project/malware">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                        Authenticity:
                                    </h1>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        By using digital signatures and cryptographic keys, it’s possible to verify that a message or file actually came from the claimed source, preventing forgeries.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                    <div className="mb-4 w-full">
                        <Card>
                            <Link href="/project/malware">
                                <article className="relative w-full h-full p-4 md:p-8">
                                    <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                        Non-Repudiation:
                                    </h1>
                                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                        In some cases, such as with digital signatures, encryption can ensure that the sender of a message cannot later deny that they sent it, creating a reliable audit trail.
                                    </p>
                                </article>
                            </Link>
                        </Card>
                    </div>
                    <div className="w-full mb-6">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <h1 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white font-display mb-4">
                                    Authentication and authorization are two key concepts in digital security:
                                </h1>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Authentication: The process of verifying a user’s identity. In addition to passwords, more advanced methods include:
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Two-Factor Authentication (2FA): Requires two different elements (such as a password and a code sent via SMS) to ensure the user is legitimate.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Biometrics: Uses physical characteristics, such as fingerprints or facial recognition, for authentication.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Authorization: Defines what an authenticated user can do within the system. Even after authentication, a user’s permissions may limit their access to certain areas or functionalities of a system.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Firewalls: Act as barriers that filter network traffic based on a set of security rules. They can block malicious traffic before it reaches the internal network.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Intrusion Detection and Prevention Systems (IDS/IPS): Tools that monitor network activity to detect attack attempts or anomalies. IDS alerts about suspicious activity, while IPS takes automatic measures to block threats.
                                </p>
                            </article>
                        </Card>
                    </div>
                    <div className="w-full mb-6">
                        <Card>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Firewall and network monitoring are digital security tools and practices used to protect networks and systems from external threats and ensure the proper functioning of a digital environment. They act as barriers and control mechanisms that filter network traffic, detect suspicious activities, and prevent cyberattacks.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Software Security and Patches focus on software as one of the primary attack surfaces. Keeping all systems up to date with security patches is an essential practice. Developers often fix vulnerabilities as they are discovered, and failure to update software can expose systems to attacks.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Backups and Disaster Recovery: Regular backups ensure that critical data can be recovered after an attack or system failure. A disaster recovery plan includes strategies for quickly restoring operational systems and data, minimizing downtime.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Compliance and security policies are essential concepts in information security management within organizations. They ensure that a company’s operations and processes comply with standards, laws, and security guidelines, protecting data and resources from breaches and cyberattacks. Security policies, on the other hand, are the guidelines, rules, and procedures established by an organization to protect its information assets, systems, and data against threats. These policies define how data should be managed, who has access to it, how IT resources are protected, and how employees should act to ensure the company's security.
                                    User Education and Awareness is an area that shows training users is one of the best ways to avoid attacks that exploit human error. Awareness programs teach employees how to recognize and avoid phishing attacks, protect passwords, and practice safe internet browsing.
                                </p>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    Cloud Security: As more companies migrate to the cloud, new security considerations arise. Cloud service providers offer robust security, but organizations still need to ensure that their data is properly configured and protected, controlling who has access and monitoring the use of the infrastructure.
                                </p>
                            </article>
                        </Card>
                    </div>
            </div>
        </div>
    )
}
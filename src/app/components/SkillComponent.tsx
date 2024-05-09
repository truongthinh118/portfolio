'use client'
import { Accordion, AccordionItem } from "@nextui-org/react";
import JavaIcon from "../../../icon/JavaIcon";
import LinuxIcon from "../../../icon/LinuxIcon";
import { PostgreSQLIcon } from "../../../icon/PostgresqlIcon";
import { JenkinsIcon } from "../../../icon/JenkinsIcon";
import { USLangIcon } from "../../../icon/USLangIcon";

const progamming = [
    { name: 'Java', icon: <JavaIcon className="h-6" /> },
    { name: 'Linux', icon: <LinuxIcon className="h-6" /> },
    { name: 'PostgreSQL', icon: <PostgreSQLIcon className="h-6" /> },
    { name: 'Jenkins', icon: <JenkinsIcon className="h-6" /> }
]

const languages = [
    { name: 'English', icon: <USLangIcon className="h-8" /> },
    { name: 'Chinese', icon: '' }
]

export default function SkillsComponent() {
    return (
        <Accordion
            showDivider={false}
            itemClasses={{
                base: 'border-b border-[#11111126]',
                title: 'data-[open=true]:font-bold text-2xl text-current',
                content: 'flex flex-col gap-1 font-normal text-2xl',
            }}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                            height: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                                duration: 1,
                            },
                            opacity: {
                                easings: "ease",
                                duration: 1,
                            },
                        },
                    },
                    exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                            height: {
                                easings: "ease",
                                duration: 0.25,
                            },
                            opacity: {
                                easings: "ease",
                                duration: 0.3,
                            },
                        },
                    },
                },
            }}
        >
            <AccordionItem key="progamming" title="Progamming Skills">
                {progamming.map((item) => (
                    <div key={item.name} className="flex gap-2">
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </AccordionItem>
            <AccordionItem key="languages" title="Foreign Languages">
                {languages.map((item) => (
                    <div key={item.name} className="flex gap-2 items-center">
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </AccordionItem>
        </Accordion>
    )
}
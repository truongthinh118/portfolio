import { Button, Link } from "@nextui-org/react";
import EnvelopeIcon from "../../../icon/EnvelopeIcon";
import GithubIcon from "../../../icon/GithubIcon";
import LinkedinIcon from "../../../icon/LinkedinIcon";

export default function ContactMethodComponent() {

    const iconClass = "h-8 fill-current"
    const contactMethods = [
        { name: 'linkedin', icon: <LinkedinIcon className={iconClass} />, href: 'https://www.linkedin.com/in/thinhdtt/' },
        { name: 'github', icon: <GithubIcon className={iconClass} />, href: 'https://github.com/truongthinh118' },
        { name: 'email', icon: <EnvelopeIcon className={iconClass} />, href: 'mailto:truongthinh118001@gmail.com' }
    ]


    return (
        <div className="flex gap-2">
            {contactMethods.map((item) => (
                <Button key={item.name} isIconOnly className="bg-inherit text-inherit" href={item.href} as={Link} isExternal>
                    {item.icon}
                </Button>
            ))}
        </div>
    )
}
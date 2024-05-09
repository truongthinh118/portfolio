import EnvelopeIcon from "../../../icon/EnvelopeIcon";
import GithubIcon from "../../../icon/GithubIcon";
import LinkedinIcon from "../../../icon/LinkedinIcon";

export default function ContactMethodComponent() {
    return (
        <div className="flex gap-3">
            <LinkedinIcon className="h-8 fill-current" />
            <GithubIcon className="h-8 fill-current" />
            <EnvelopeIcon className="h-8 fill-current" />
        </div>
    )
}
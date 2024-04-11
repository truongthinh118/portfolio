import Link from "next/link"
import LanguageMenu from "./languagemenu"

export default function Navigator() {
    return (
        <div className="flex justify-between gap-6 text-xl center">
            <Link href={"/about"} className=" hover:text-[#50577A]">
                Information
            </Link>
            <Link href={"/projects"} className=" hover:text-[#50577A]">
                Projects
            </Link>
            <Link href={"/contact"} className=" hover:text-[#50577A]">
                Contact
            </Link>

            <LanguageMenu lang="en" />
        </div>
    )
}
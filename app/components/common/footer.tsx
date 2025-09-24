import { personalInfo } from "@/app/constants/constatnts"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-primary backdrop-blur-[10px] border-t border-gray-300/20">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex justify-center items-center py-8">
                    <p className="text-[0.95rem] text-gray-400 m-0 text-center">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
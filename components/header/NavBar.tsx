"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
	const pathname = usePathname();
	const navItems = [
		{ href: "/", label: "메인" },
		{ href: "/jobs", label: "직업 분석" },
		{ href: "/guild", label: "길드" },
	];

	return (
		<div className="w-full flex py-[16px] gap-[12px] border-y border-neutral-600">
			{navItems.map(({ href, label }) => (
				<Link key={href} href={href} className={`${pathname === href ? "text-black font-bold dark:text-white" : "text-[#757575]"} transition-colors`}>
					{label}
				</Link>
			))}
		</div>
	);
}

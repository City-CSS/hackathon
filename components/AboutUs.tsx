import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function AboutUs() {
	return (
		<div className="pt-6 sm:pt-12">
			<h2 className="mx-12 bg-gradient-to-r from-lime-300 via-red-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl font-bold text-transparent leading-tight text-center pb-5">
				<span className="text-xl sm:text-2xl lg:3xl text-text-50">Brought to you by...</span><br/>
				Computer Science Society
			</h2>
			<div className="mx-auto relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
				<Link href="https://www.citystudents.co.uk/getinvolved/society/css/">
					<Image src="/CSSLogo.svg" alt="CSS Logo" fill={true} className="mx-auto"/>
				</Link>
			</div>
			<div className="mx-auto sm:text-lg text-center max-w-xl px-8 lg:px-0">
				<p className="pt-8 sm:pt-12">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<p className="pt-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</div>
	)
}

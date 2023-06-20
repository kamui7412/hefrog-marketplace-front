import Head from 'next/head'
import './globals.scss'
import { Inter } from 'next/font/google'
import { Container, HeaderWrapper } from 'components/custom/common'
import Navbar from 'components/layout/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<HeaderWrapper>
				{/* <Navbar items={navItems} />
				<HomeBanner data={TESTIMONIALS.map((i: any, k: number) => feature(i, k))} /> */}
			</HeaderWrapper>
			<Container>
				{children}
			</Container>
		</html>
	)
}

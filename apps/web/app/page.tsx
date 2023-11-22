"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Hero from "./components/Hero";

export default function Page(): JSX.Element {
	useEffect(() => {
		void fetch("http://localhost:3001").then(async (res) => {
			console.log(await res.json());
		});
	}, []);
	return (
		<main className={styles.main}>
			<Hero />
		</main>
	);
}

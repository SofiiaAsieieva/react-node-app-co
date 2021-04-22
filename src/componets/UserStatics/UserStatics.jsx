import React from 'react';
import { Header } from './componentsUserStatics/Header/Header';
import { Body } from './componentsUserStatics/Body/Body';
import { Footer } from './componentsUserStatics/Footer/Footer';
import style from './section.module.scss'

export const UserStatics = () => {
		return (
				<div>
						<section>
								<Header />
						</section>
						
						<section className={style.section}>
								<Body />
						</section>
						
						<section>
								<Footer />
						</section>
				</div>
		);
}

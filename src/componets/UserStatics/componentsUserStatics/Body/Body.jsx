import React from 'react';
import { Link } from 'react-router-dom';
import users  from '../../../../api/users.json'
import styles from './body.module.scss'

export const Body = () => {
		return (
				<section className={styles.body}>
						<Link className={`${styles.body__link} ${styles["body__link--active"]}`} to="/">
								Main page
						</Link>
						
						<Link className={styles.body__link} to="/UserStatics">
								User Statics
						</Link>
						
						<div className={styles["body__tablet"]}>
								<h2 className={styles.body__name}>
										Users statistics
								</h2>
								
								<table>
										<tr className={styles["body__tablet-cell"]}>
												<th className={`${styles["body__tablet-name"]} ${styles["body__tablet-name--first"]}`}>
														id
												</th>
												<th className={styles["body__tablet-name"]}>First name</th>
												<th className={styles["body__tablet-name"]}>Last name</th>
												<th className={styles["body__tablet-name"]}>Email</th>
												<th className={styles["body__tablet-name"]}>Gender</th>
												<th className={styles["body__tablet-name"]}>IP address</th>
												<th className={styles["body__tablet-name"]}>Total clicks</th>
												<th className={`${styles["body__tablet-name"]} ${styles["body__tablet-name--last"]}`}>
														Total page views
												</th>
										</tr>
										{users.map(user => (
												<tr
														className={styles["body__tablet-cell"]}
														key={user.id}
												>
														<td>{user.id}</td>
														<td className={styles["body__tablet-body"]}>
																{user.name.split(' ')[0]}
														</td>
														<td className={styles["body__tablet-body"]}>
																{user.name.split(' ')[1]}
														</td>
														<td className={styles["body__tablet-body"]}>
																{user.email}
														</td>
														<td>{user.gender}</td>
														<td>{user.IPAddress}</td>
														<td>{user.clicks}</td>
														<td>{user.pageViews}</td>
												</tr>
										))}
								</table>
						</div>
				</section>
		);
}

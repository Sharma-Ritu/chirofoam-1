import React from 'react';
import Banner from "../components/banner"
import Footer from "../components/footer"
import Products from '~/components/Products'


export default (props) => {
  return (
	<>
		<main>
		<Banner />

		<section>
			<Products />
		</section>
		<Footer />
		</main>
	</>
  );
};

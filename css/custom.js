(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});

	var rellax = new Rellax('.rellax');

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 500);
	};
	preloader();
	

	var tinyslier = function() {

		

		var el = document.querySelectorAll('.wide-slider-testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: ".wide-slider-testimonial",
				items: 1,
				slideBy: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: "bottom",
				autoHeight: true,
				autoplay: true,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				controlsContainer: "#prevnext-testimonial",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			});
		}


		var destinationSlider = document.querySelectorAll('.destination-slider');

		if ( destinationSlider.length > 0 ) {
			var desSlider = tns({
				container: ".destination-slider",
				mouseDrag: true,
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 700,
				edgePadding: 50,
				nav: true,
				gutter: 30,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: "#destination-controls",
				responsive: {
					350: {
						items: 1
					},
					
					500: {
						items: 2
					},
					600: {
						items: 3
					},
					900: {
						items: 5
					}
				},
			})
		}



	}
	tinyslier();


	var lightbox = function() {
		var lightboxVideo = GLightbox({
			selector: '.glightbox3'
		});
	};
	lightbox();

	


})();
// window.onload = () => {
// 	setTimeout(() => {
// 		const queryAll = (element) => document.querySelectorAll(element)
// 		const query = (element) => document.querySelector(element)

// 		const span = queryAll('span')
// 		const collapseItem0 = query('#collapseItem0')
// 		span.forEach(el => {
// 			if(el.dataset.target === '#collapseItem0') {
// 				el.setAttribute('data-extend', false)
// 				console.log(el, collapseItem0)

// 				el.addEventListener('click', () => {
// 					el.setAttribute('data-extend', true)
// 				})
// 			}
// 		})

// 		const load = () => {
// 			const collapseItem0 = query('#collapseItem0')
// 			const span = queryAll('span')
// 			span.forEach(el => {
// 				if(el.getAttribute('data-extend') === 'true') {
// 					console.log('je fonctionne')
// 				}
// 			})
// 		}
	
// 		requestAnimationFrame(load)
// 	}, 1000)

	
// }




class NavBar extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback(){
		const HTML = `	
				<!--  NAV BAR-->
					<nav class="site-nav mt-3">
						<div class="container">

							<div class="site-navigation">
								<div class="row align-items-center">
									<div class="col-6 col-lg-3">
										<a href="index.html" class="logo m-0 float-start">
											<img src="/logo_white.png" alt="" >
										</a>
									</div>
									<div class="col-lg-6 d-none d-lg-inline-block text-center nav-center-wrap">
										<ul class="js-clone-nav  text-center site-menu p-0 m-0">
											<li class="active"><a href="index.html">Accueil</a></li>
											<!-- <li><a href="about.html">Contact</a></li> -->
											<li class="has-children">
												<div>
													<a>Nos Activités</a>

												</div>
												<ul class="dropdown">
													<li>
														<a class="btnElevage" href="#elevage">Elevage</a>
													</li>
													<li>
														<a class="btnAgriculture" href="#agriculture">Agriculture</a>
													</li>
													<li>
														<a class="btnTransform" href="#transformation">Transformation</a>
													</li>
													<li>
														<a href="">Analyse</a>
														<ul class="dropdown">
															<li>
																<li>
																	<a href="#">Présentation du laboratoire</a>
																	
																</li>
															</li>
														</ul>
													</li>
												</ul>
											</li>
											<li class="has-children">
												<a href="#">Nous rejoindre</a>
												<ul class="dropdown">
													<li>
														<a href="#">Emploi</a>
													</li>
													<li>
														<a href="#">Formation</a>
													</li>
													<li>
														<a href="#">Partenariat</a>
													</li>
												</ul>
											</li>
											<li><a href="histoire.html">Histoire du projet</a></li>
										</ul>
									</div>
									<div class="col-6 col-lg-3 text-lg-end">
										<ul class="js-clone-nav d-none d-lg-inline-block text-end site-menu ">
											<li class="cta-button" ><a href="#ancre" style="background-color: #C6F598; border: none; color: #1B221C; padding: 16px 24px; font-weight: 600;">Nous contacter</a></li>
										</ul>

										<a
											class="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light menu-close"
											data-toggle="collapse" data-target="#main-navbar">
											<span></span>
										</a>
									</div>
								</div>
							</div>

						</div>
					</nav>
				<!-- FIN NAV BAR -->`
		const div = document.createElement('div')
		div.innerHTML = HTML
		this.appendChild(div) 
	}

}

class Footer extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const HTML = `
		<div class="site-footer" style="background-color: #4D594A;">
		<div class="container">

			<div class="row">
				<div class="col-lg-4">
					<div class="widget">
						<h3  id="ancre">A propos
							<span  style="display: block; font-size: 24px;">Konji Farm</span>
							<span class="text-primary"></span> </h3>
						<p style="color: #1B221C; text-transform: none;">
							KONJIFARM s'engage à améliorer la qualité de vie des populations en proposant des produits naturels, à travers des procédés de production 
							respectueux de l’écosystème dans lequel elle s’inscrit.
						</p>
					</div> <!-- /.widget -->
					<div class="widget">
						
						<ul class="list-unstyled social">
							<li><a href="#" ><span class="icon-instagram" ></span></a></li>
							<li><a href="#" ><span class="icon-twitter" ></span></a></li>
							<li><a href="#" ><span class="icon-facebook" ></span></a></li>
							<li><a href="#" ><span class="icon-linkedin" ></span></a></li>
							<!-- <li><a href="#" ><span class="icon-pinterest"></span></a></li>
							<li><a href="#" ><span class="icon-dribbble"></span></a></li> -->
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-3 -->

				<div class="col-lg-2 ml-auto">
					<div class="widget">
						<h3 >Liens</h3>
						<ul class="list-unstyled float-left links">
							<li><a href="/" >Accueil</a></li>
							<li><a href="/services.html#elevage" >Elevage</a></li>
							<li><a href="/services.html#agriculture" >Agriculture</a></li>
							<li><a href="/services.html#analyse" >Analyse</a></li>
							<li><a href="/services.html#engrais" >Engrais</a></li>
							<li><a href="/histoire.html" >Histoire du projet</a></li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-3 -->

				<div class="col-lg-2">
					<div class="widget">
						<h3>Nous rejoindre</h3>
						<ul class="list-unstyled float-left links">
							<li style="text-transform: none;"><a href="/rejoindre.html#devis" >Demande de devis</a></li>
							<li><a href="/rejoindre.html#carriere">Carrières</a></li>
							<li><a href="/rejoindre.html#partenariat">Partenariat</a></li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-3 -->


				<div class="col-lg-3">
					<div class="widget">
						<h3 >Contact</h3>
						<address style="text-transform: none; color: black;">Nous sommes situés à Yaoundé au Cameroun, en face de l'ancien FEICOM</address>
						<ul class="list-unstyled links mb-4">
							<li><a href="" >+237 671 095 598</a></li>
								
							<li><a href="mailto:contact@konji-farm.com" style="color: #1B221C; text-transform: none;">contact@konji-farm.com</a></li>
						</ul>
					</div> <!-- /.widget -->
				</div> <!-- /.col-lg-3 -->

			</div> <!-- /.row -->

			<div class="row mt-5">
				<div class="col-12 text-center">
					<p class="mb-0" style="color: black; text-transform: none;">Tous droits reservés &copy;
						<script >document.write(new Date().getFullYear());</script>. KONJI FARM. 
					</p>
				</div>
			</div> <!-- /.container -->
		</div> <!-- /.site-footer -->
		</div>
		`

		const div = document.createElement('div')
		// div.innerHTML = HTML
		this.innerHTML = HTML 
	}
}

class Newsletter extends HTMLElement {
	constructor(){
		super()
	}

	connectedCallback() {
		const HTML = `<div class="newsletter" style="background-color: white;">
		<div class="container">
			<h2 class="heading mb-5" style="color: #1B221C;">Notre <br> Newsletter</h2>
			<div>
				<p></p>
			</div>
			<div class=" col-12">
				<div class="widget">
					<h3 style="color: #1B221C; text-align: start; text-transform: none;">Contactez-nous</h3>
					<address style="text-transform: none; ">Nous sommes situés au Cameroun à Yaoundé en face de l'ancien FEICOM</address>
					<ul class="list-unstyled links mb-4">
						<li><a href="" style="color: #1B221C;">+237 671 095 598</a></li>
						<li><a href="mailto:contact@konji-farm.com" style="color: #1B221C; text-transform: none;">contact@konji-farm.com</a></li>
					</ul>
				</div> <!-- /.widget -->
			</div> <!-- /.col-lg-3 -->
			<div class="col-lg-6 col-12 d-block px-0">
				<div style="display: flex; align-items: center;">
					<input type="mail"  style="padding: 12px 16px; background-color: #F5F6F4; flex: 1; border: none; outline: 1px solid transparent;" placeholder="Votre address mail">
					<button style="height: 100%; width: 25%; padding: 12px 16px;  background-color: #1B221C; color: white; font: 700;">Envoyer</button>
				</div>
			</div>
		</div>
	</div>`

	this.innerHTML = HTML
		
	}
}



customElements.define('nav-bar', NavBar)
customElements.define('footer-side', Footer)
customElements.define('news-letter', Newsletter)
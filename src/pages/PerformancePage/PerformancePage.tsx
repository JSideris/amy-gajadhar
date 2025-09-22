import { Download, Play, MapPin } from "lucide-react";

const PerformancePage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
	<div className="bg-white">
		{/* Hero Section */}
		<div className="bg-white pt-20 pb-20 px-6">

			<div className="text-center mb-16">
				<h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
					Performance Services
				</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
					Elegant piano music for weddings, corporate events, and special occasions
					throughout the Greater Toronto Area.
				</p>
			</div>
		</div>

		{/* Main Content */}
		<div className="bg-gray-50 py-20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-6 mb-16">
					{/* Wedding Services Card */}
					<div className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
						<h2 className="text-2xl font-medium text-rose-500 mb-6 tracking-tight">Wedding Services</h2>
						
						<div className="space-y-6">
							<div className="group">
								<h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-rose-500 transition-colors">
									Ceremony Music
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed font-light">
									Beautiful processional, recessional, and ceremony music tailored to your vision.
								</p>
								<div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-light">
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Classical wedding favorites</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Contemporary love songs</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Custom song arrangements</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Religious and secular options</span>
									</div>
								</div>
							</div>

							<div className="group">
								<h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-rose-500 transition-colors">
									Cocktail Hour
								</h3>
								<p className="text-gray-600 mb-4 leading-relaxed font-light">
									Sophisticated background music that creates the perfect ambiance for your celebration.
								</p>
								<div className="grid grid-cols-2 gap-2 text-sm text-gray-600 font-light">
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Jazz standards and classics</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Popular music arrangements</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Film and Broadway favorites</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1 h-1 bg-rose-400 rounded-full"></div>
										<span>Seasonal and themed selections</span>
									</div>
								</div>
							</div>

							<div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
								<h3 className="font-medium text-rose-500 mb-3 text-lg tracking-tight">Custom Packages</h3>
								<p className="text-rose-800 leading-relaxed font-light">
									Each wedding is unique. Amy works with couples to create personalized musical
									experiences that reflect your style and preferences.
								</p>
							</div>
						</div>
					</div>

					{/* Repertoire & Media Card */}
					<div className="bg-white rounded-2xl p-8 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
						<h2 className="text-2xl font-medium text-rose-500 mb-6 tracking-tight">Repertoire & Media</h2>

						<div className="space-y-6">
							<div>
								<h3 className="text-lg font-medium text-gray-900 mb-4">Sample Repertoire</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="bg-gray-50 rounded-2xl p-4">
										<h4 className="font-medium text-gray-900 mb-3">Classical</h4>
										<div className="space-y-2 text-sm text-gray-600 font-light">
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>Bach: Air on G String</span>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>Pachelbel: Canon in D</span>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>Debussy: Clair de Lune</span>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>Chopin: Nocturnes</span>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 rounded-2xl p-4">
										<h4 className="font-medium text-gray-900 mb-3">Popular</h4>
										<div className="space-y-2 text-sm text-gray-600 font-light">
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>The Way You Look Tonight</span>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>All of Me</span>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>A Thousand Years</span>
											</div>
											<div className="flex items-center space-x-2">
												<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
												<span>Perfect</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div>
								<button className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-full transition-all duration-200 w-full justify-center font-light">
									<Download size={20} className="text-rose-600" />
									<span className="text-gray-900">Download Complete Repertoire List</span>
								</button>
							</div>

							<div>
								<h3 className="text-lg font-medium text-gray-900 mb-4">Audio Samples</h3>
								<div className="space-y-3">
									{['Wedding Ceremony Medley', 'Jazz Standards Collection', 'Classical Favorites'].map((title, index) => (
										<div key={index} className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-4 rounded-2xl transition-all duration-200 border border-gray-100">
											<span className="text-gray-900 font-light">{title}</span>
											<button className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 transition-colors">
												<div className="bg-rose-100 hover:bg-rose-200 rounded-full p-2 transition-colors">
													<Play size={16} className="ml-0.5" />
												</div>
											</button>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* CTA Section */}
		<div className="bg-white py-20">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
					Ready to make your event unforgettable?
				</h2>
				<p className="text-xl text-gray-600 mb-8 font-light">
					Create beautiful musical memories for your special occasion.
				</p>
				<button
					onClick={() => setCurrentPage('contact')}
					className="cursor-pointer bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				>
					Book Your Special Occasion
				</button>
			</div>
		</div>
	</div>
);

export default PerformancePage;